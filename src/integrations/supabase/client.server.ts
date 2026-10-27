import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import {
  PRODUCTION_SUPABASE_ANON_KEY,
  PRODUCTION_SUPABASE_URL,
} from '@/lib/supabase-defaults';
import type { Database } from './types';

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    if (isNewSupabaseApiKey(supabaseKey) && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }

    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

function env(name: string): string {
  const fromProcess = typeof process !== 'undefined' ? process.env?.[name] : undefined;
  const fromVite =
    typeof import.meta !== 'undefined'
      ? (import.meta as ImportMeta & { env?: Record<string, string> }).env?.[name]
      : undefined;
  return (fromProcess || fromVite || '').trim();
}

function resolveSupabaseUrl() {
  return (
    env('SUPABASE_URL') ||
    env('VITE_SUPABASE_URL') ||
    PRODUCTION_SUPABASE_URL
  );
}

function resolveSupabaseKey() {
  // Prefer service role when available; otherwise use the public anon/publishable key.
  return (
    env('SUPABASE_SERVICE_ROLE_KEY') ||
    env('SUPABASE_SECRET_KEY') ||
    env('SUPABASE_PUBLISHABLE_KEY') ||
    env('VITE_SUPABASE_PUBLISHABLE_KEY') ||
    env('VITE_SUPABASE_ANON_KEY') ||
    env('SUPABASE_ANON_KEY') ||
    PRODUCTION_SUPABASE_ANON_KEY
  );
}

function createSupabaseAdminClient() {
  const SUPABASE_URL = resolveSupabaseUrl();
  const SUPABASE_KEY = resolveSupabaseKey();

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    const missing = [
      ...(!SUPABASE_URL ? ['SUPABASE_URL / VITE_SUPABASE_URL'] : []),
      ...(!SUPABASE_KEY ? ['SUPABASE_SERVICE_ROLE_KEY or VITE_SUPABASE_PUBLISHABLE_KEY'] : []),
    ];
    throw new Error(`Missing Supabase environment variable(s): ${missing.join(', ')}.`);
  }

  return createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
    global: {
      fetch: createSupabaseFetch(SUPABASE_KEY),
    },
    auth: {
      storage: undefined,
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

let _supabaseAdmin: ReturnType<typeof createSupabaseAdminClient> | undefined;

export const supabaseAdmin = new Proxy({} as ReturnType<typeof createSupabaseAdminClient>, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  },
});

export function getSupabaseAdmin(): SupabaseClient<Database> {
  return supabaseAdmin as SupabaseClient<Database>;
}
