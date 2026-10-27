-- Allow company admin to save CMS content (site_settings upserts).
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

GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;

DROP POLICY IF EXISTS "Admins manage site settings" ON public.site_settings;
CREATE POLICY "Admins manage site settings"
  ON public.site_settings FOR ALL TO authenticated
  USING (public.is_company_admin())
  WITH CHECK (public.is_company_admin());
