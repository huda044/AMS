import { createClient } from '@supabase/supabase-js';

// Ambil URL dan Key dari .env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Buat instance Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;