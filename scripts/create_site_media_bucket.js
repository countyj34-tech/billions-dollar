#!/usr/bin/env node
/*
Create the `site-media` storage bucket in Supabase using the
`SUPABASE_SERVICE_ROLE_KEY` environment variable.

Usage:
  SUPABASE_URL="https://<project>.supabase.co" SUPABASE_SERVICE_ROLE_KEY="<key>" node scripts/create_site_media_bucket.js

Notes:
 - Do NOT commit your service role key. Set it in your environment or CI secrets.
 - This script only creates the bucket via the Storage REST API. It does not
   modify SQL policies; those are provided in `supabase/migrations/*.sql`.
*/

(async function main() {
  try {
    const fs = await import('fs');
    const path = await import('path');
    let SUPABASE_URL = process.env.SUPABASE_URL;
    let SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envText = fs.readFileSync(envPath, 'utf-8');
      for (const line of envText.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?(.*?)"?\s*$/);
        if (match) {
          const [, key, value] = match;
          if (!process.env[key] && (key === 'SUPABASE_URL' || key === 'SUPABASE_SERVICE_ROLE_KEY')) {
            process.env[key] = value;
          }
        }
      }
      SUPABASE_URL = process.env.SUPABASE_URL;
      SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
    }

    if (!SUPABASE_URL || !SERVICE_KEY) {
      console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment or .env file.');
      console.error('Example: SUPABASE_URL="https://xyz.supabase.co" SUPABASE_SERVICE_ROLE_KEY="<key>" node scripts/create_site_media_bucket.js');
      process.exit(1);
    }

    const baseUrl = SUPABASE_URL.replace(/\/+$/g, '');
    const url = `${baseUrl}/storage/v1/buckets`;

    // Check if bucket exists by listing buckets
    const listRes = await fetch(url, {
      headers: { Authorization: `Bearer ${SERVICE_KEY}` }
    });
    if (!listRes.ok) {
      const body = await listRes.text();
      console.error('Failed to list buckets:', listRes.status, body);
      process.exit(1);
    }
    const buckets = await listRes.json();
    if (Array.isArray(buckets) && buckets.find(b => b.id === 'site-media')) {
      console.log('Bucket `site-media` already exists.');
      process.exit(0);
    }

    // Create the bucket (private)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'site-media', public: false })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Failed to create bucket:', res.status, text);
      process.exit(1);
    }

    const created = await res.json();
    console.log('Created bucket:', created.id || JSON.stringify(created));
    console.log('Next: run your SQL migrations and ensure storage policies exist (see supabase/migrations).');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
