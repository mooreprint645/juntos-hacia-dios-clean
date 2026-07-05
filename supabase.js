const SUPABASE_URL = "https://bmtgfbtoyxwrrnygsqcj.supabase.co";
const SUPABASE_ANON_KEY = "PEGAR_ANON_KEY_AQUI";

if (window.supabase && SUPABASE_ANON_KEY !== "PEGAR_ANON_KEY_AQUI") {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
  window.supabaseClient = null;
}
