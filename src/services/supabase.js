import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pfhloajplmglzucbgmvy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaGxvYWpwbG1nbHp1Y2JnbXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4Njc0ODMsImV4cCI6MjAwNDQ0MzQ4M30.EWpvHGXZiAbypYrZv8e9OGX1ETs84Eijhlx6lXLxNwg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
