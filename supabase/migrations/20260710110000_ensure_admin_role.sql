-- Run in Supabase SQL Editor for project: rvzmwmkdxhvlkmeqecto
-- After creating the Auth user in Authentication → Users
-- (email: besteasterntravel@yahoo.com, auto-confirm email ON)

-- Grant admin role to that user
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
WHERE lower(email) = 'besteasterntravel@yahoo.com'
ON CONFLICT (user_id, role) DO NOTHING;
