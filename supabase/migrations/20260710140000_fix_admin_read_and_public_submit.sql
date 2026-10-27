-- Same as FIX_ADMIN_AND_FORMS.sql (migration copy)
CREATE OR REPLACE FUNCTION public.is_company_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (
      lower((SELECT email FROM auth.users WHERE id = auth.uid()))
        = 'besteasterntravel@yahoo.com'
    )
    OR public.has_role(auth.uid(), 'admin'),
    false
  );
$$;

GRANT EXECUTE ON FUNCTION public.is_company_admin() TO authenticated, anon;

CREATE OR REPLACE FUNCTION public.ensure_company_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  caller_email text;
  caller_id uuid := auth.uid();
BEGIN
  IF caller_id IS NULL THEN
    RETURN false;
  END IF;

  SELECT lower(email) INTO caller_email FROM auth.users WHERE id = caller_id;
  IF caller_email IS DISTINCT FROM 'besteasterntravel@yahoo.com' THEN
    RETURN false;
  END IF;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (caller_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN true;
END;
$$;

GRANT EXECUTE ON FUNCTION public.ensure_company_admin() TO authenticated;

INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'besteasterntravel@yahoo.com'
ON CONFLICT (user_id, role) DO NOTHING;

GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.bookings TO authenticated;
GRANT SELECT, DELETE ON public.contact_messages TO authenticated;

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a booking"
    ON public.bookings FOR INSERT TO anon, authenticated WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a contact message"
    ON public.contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DROP POLICY IF EXISTS "Admins can view bookings" ON public.bookings;
CREATE POLICY "Admins can view bookings"
  ON public.bookings FOR SELECT TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can update bookings" ON public.bookings;
CREATE POLICY "Admins can update bookings"
  ON public.bookings FOR UPDATE TO authenticated
  USING (public.is_company_admin())
  WITH CHECK (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can delete bookings" ON public.bookings;
CREATE POLICY "Admins can delete bookings"
  ON public.bookings FOR DELETE TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can read messages" ON public.contact_messages;
CREATE POLICY "Admins can read messages"
  ON public.contact_messages FOR SELECT TO authenticated
  USING (public.is_company_admin());

DROP POLICY IF EXISTS "Admins can delete messages" ON public.contact_messages;
CREATE POLICY "Admins can delete messages"
  ON public.contact_messages FOR DELETE TO authenticated
  USING (public.is_company_admin());

CREATE OR REPLACE FUNCTION public.submit_public_booking(
  p_name text,
  p_email text,
  p_phone text DEFAULT NULL,
  p_destination text DEFAULT NULL,
  p_travel_date date DEFAULT NULL,
  p_travelers int DEFAULT NULL,
  p_notes text DEFAULT NULL,
  p_payload jsonb DEFAULT '{}'::jsonb
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id uuid;
BEGIN
  INSERT INTO public.bookings (
    name, email, phone, destination, travel_date, travelers, notes, payload, status
  ) VALUES (
    p_name, p_email, p_phone, p_destination, p_travel_date, p_travelers, p_notes, p_payload, 'new'
  )
  RETURNING id INTO new_id;
  RETURN new_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_public_contact(
  p_name text,
  p_email text,
  p_phone text DEFAULT NULL,
  p_subject text DEFAULT NULL,
  p_message text DEFAULT ''
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id uuid;
BEGIN
  INSERT INTO public.contact_messages (name, email, phone, subject, message)
  VALUES (p_name, p_email, p_phone, p_subject, p_message)
  RETURNING id INTO new_id;
  RETURN new_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_public_booking(
  text, text, text, text, date, int, text, jsonb
) TO anon, authenticated;

GRANT EXECUTE ON FUNCTION public.submit_public_contact(
  text, text, text, text, text
) TO anon, authenticated;
