// Runtime config: reads from environment variables at runtime (process.env)

export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export default { SUPABASE_URL, SUPABASE_ANON_KEY, GEMINI_API_KEY };
