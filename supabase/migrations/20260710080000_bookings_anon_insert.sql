-- Public booking form submissions must be allowed for anon (browser) inserts.
-- Live site was failing with: new row violates row-level security policy for table "bookings"

GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a booking"
    ON public.bookings
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a contact message"
    ON public.contact_messages
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
