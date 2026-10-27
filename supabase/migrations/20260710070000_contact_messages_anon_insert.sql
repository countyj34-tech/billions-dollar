-- Allow public contact form submissions (anon) into contact_messages
GRANT INSERT ON public.contact_messages TO anon, authenticated;

DO $$ BEGIN
  CREATE POLICY "Anyone can submit a contact message"
    ON public.contact_messages
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
