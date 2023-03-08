import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xirugvgpbgucdzwyizlx.supabase.co/';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcnVndmdwYmd1Y2R6d3lpemx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMDI4MDAsImV4cCI6MTk5Mzc3ODgwMH0.MUYxaqvQ8QikNpQxc4zIUEpY6naiuVgXlvLUAI8yeW4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
