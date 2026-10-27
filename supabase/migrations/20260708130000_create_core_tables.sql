-- Migration: create core tables, types, functions, policies, and triggers
-- Idempotent and safe to re-run

-- 1) Enum: app_role
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'user');
  END IF;
END $$;

-- 2) user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Users can view their own roles'
      AND polrelid = 'public.user_roles'::regclass
  ) THEN
    CREATE POLICY "Users can view their own roles"
      ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 3) has_role helper
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

-- 4) site_settings
CREATE TABLE IF NOT EXISTS public.site_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);
GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Anyone can read site settings'
      AND polrelid = 'public.site_settings'::regclass
  ) THEN
    CREATE POLICY "Anyone can read site settings"
      ON public.site_settings FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins manage site settings'
      AND polrelid = 'public.site_settings'::regclass
  ) THEN
    CREATE POLICY "Admins manage site settings"
      ON public.site_settings FOR ALL TO authenticated
      USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 5) posts
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  body text NOT NULL DEFAULT '',
  image_url text,
  video_url text,
  audio_url text,
  category text,
  published boolean NOT NULL DEFAULT true,
  author_id uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.posts TO anon, authenticated;
GRANT ALL ON public.posts TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.posts TO authenticated;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Anyone can read published posts'
      AND polrelid = 'public.posts'::regclass
  ) THEN
    CREATE POLICY "Anyone can read published posts"
      ON public.posts FOR SELECT TO anon, authenticated
      USING (published = true OR public.has_role(auth.uid(), 'admin'));
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins manage posts'
      AND polrelid = 'public.posts'::regclass
  ) THEN
    CREATE POLICY "Admins manage posts"
      ON public.posts FOR ALL TO authenticated
      USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 6) bookings
CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  destination text,
  travel_date date,
  travelers int,
  notes text,
  payload jsonb,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT SELECT, UPDATE ON public.bookings TO authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Anyone can submit a booking'
      AND polrelid = 'public.bookings'::regclass
  ) THEN
    CREATE POLICY "Anyone can submit a booking"
      ON public.bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins can view bookings'
      AND polrelid = 'public.bookings'::regclass
  ) THEN
    CREATE POLICY "Admins can view bookings"
      ON public.bookings FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins can update bookings'
      AND polrelid = 'public.bookings'::regclass
  ) THEN
    CREATE POLICY "Admins can update bookings"
      ON public.bookings FOR UPDATE TO authenticated
      USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 7) contact_messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins can read messages'
      AND polrelid = 'public.contact_messages'::regclass
  ) THEN
    CREATE POLICY "Admins can read messages"
      ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Admins can delete messages'
      AND polrelid = 'public.contact_messages'::regclass
  ) THEN
    CREATE POLICY "Admins can delete messages"
      ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 8) email_send_log and related
CREATE TABLE IF NOT EXISTS public.email_send_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id TEXT,
  template_name TEXT NOT NULL,
  recipient_email TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'sent', 'suppressed', 'failed', 'bounced', 'complained', 'dlq')),
  error_message TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.email_send_log TO service_role;
ALTER TABLE public.email_send_log ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can read send log'
      AND polrelid = 'public.email_send_log'::regclass
  ) THEN
    CREATE POLICY "Service role can read send log"
      ON public.email_send_log FOR SELECT USING (auth.role() = 'service_role');
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can insert send log'
      AND polrelid = 'public.email_send_log'::regclass
  ) THEN
    CREATE POLICY "Service role can insert send log"
      ON public.email_send_log FOR INSERT WITH CHECK (auth.role() = 'service_role');
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can update send log'
      AND polrelid = 'public.email_send_log'::regclass
  ) THEN
    CREATE POLICY "Service role can update send log"
      ON public.email_send_log FOR UPDATE USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
CREATE INDEX IF NOT EXISTS idx_email_send_log_created ON public.email_send_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_send_log_recipient ON public.email_send_log(recipient_email);
CREATE UNIQUE INDEX IF NOT EXISTS idx_email_send_log_message_sent_unique
  ON public.email_send_log(message_id) WHERE status = 'sent';

-- 9) email_send_state
CREATE TABLE IF NOT EXISTS public.email_send_state (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  retry_after_until TIMESTAMPTZ,
  batch_size INTEGER NOT NULL DEFAULT 10,
  send_delay_ms INTEGER NOT NULL DEFAULT 200,
  auth_email_ttl_minutes INTEGER NOT NULL DEFAULT 15,
  transactional_email_ttl_minutes INTEGER NOT NULL DEFAULT 60,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
INSERT INTO public.email_send_state (id) VALUES (1) ON CONFLICT DO NOTHING;
GRANT ALL ON public.email_send_state TO service_role;
ALTER TABLE public.email_send_state ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can manage send state'
      AND polrelid = 'public.email_send_state'::regclass
  ) THEN
    CREATE POLICY "Service role can manage send state"
      ON public.email_send_state FOR ALL USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 10) suppressed_emails
CREATE TABLE IF NOT EXISTS public.suppressed_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  reason TEXT NOT NULL CHECK (reason IN ('unsubscribe', 'bounce', 'complaint')),
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(email)
);
GRANT ALL ON public.suppressed_emails TO service_role;
ALTER TABLE public.suppressed_emails ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can read suppressed emails'
      AND polrelid = 'public.suppressed_emails'::regclass
  ) THEN
    CREATE POLICY "Service role can read suppressed emails"
      ON public.suppressed_emails FOR SELECT USING (auth.role() = 'service_role');
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can insert suppressed emails'
      AND polrelid = 'public.suppressed_emails'::regclass
  ) THEN
    CREATE POLICY "Service role can insert suppressed emails"
      ON public.suppressed_emails FOR INSERT WITH CHECK (auth.role() = 'service_role');
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 11) email_unsubscribe_tokens
CREATE TABLE IF NOT EXISTS public.email_unsubscribe_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  used_at TIMESTAMPTZ
);
GRANT ALL ON public.email_unsubscribe_tokens TO service_role;
ALTER TABLE public.email_unsubscribe_tokens ENABLE ROW LEVEL SECURITY;
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can read tokens'
      AND polrelid = 'public.email_unsubscribe_tokens'::regclass
  ) THEN
    CREATE POLICY "Service role can read tokens"
      ON public.email_unsubscribe_tokens FOR SELECT USING (auth.role() = 'service_role');
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can insert tokens'
      AND polrelid = 'public.email_unsubscribe_tokens'::regclass
  ) THEN
    CREATE POLICY "Service role can insert tokens"
      ON public.email_unsubscribe_tokens FOR INSERT WITH CHECK (auth.role() = 'service_role');
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policy
    WHERE polname = 'Service role can mark tokens as used'
      AND polrelid = 'public.email_unsubscribe_tokens'::regclass
  ) THEN
    CREATE POLICY "Service role can mark tokens as used"
      ON public.email_unsubscribe_tokens FOR UPDATE USING (auth.role() = 'service_role') WITH CHECK (auth.role() = 'service_role');
  END IF;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- 12) updated_at trigger helper
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'posts_updated_at') THEN
    CREATE TRIGGER posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'site_settings_updated_at') THEN
    CREATE TRIGGER site_settings_updated_at BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
  END IF;
EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- Insert initial admin role
INSERT INTO public.user_roles (user_id, role)
VALUES ('<USER_UUID>', 'admin')
ON CONFLICT DO NOTHING;
