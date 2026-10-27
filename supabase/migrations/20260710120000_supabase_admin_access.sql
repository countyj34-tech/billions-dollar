-- Supabase-only admin access (no Netlify server required).
-- Company email is auto-granted the admin role after Auth signup/login.

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

  SELECT lower(email) INTO caller_email
  FROM auth.users
  WHERE id = caller_id;

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

-- When the company admin user is created in Auth, grant admin automatically
CREATE OR REPLACE FUNCTION public.handle_company_admin_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF lower(NEW.email) = 'besteasterntravel@yahoo.com' THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_company_admin ON auth.users;
CREATE TRIGGER on_auth_user_company_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_company_admin_user();

-- If the Auth user already exists, grant admin now
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'besteasterntravel@yahoo.com'
ON CONFLICT (user_id, role) DO NOTHING;
