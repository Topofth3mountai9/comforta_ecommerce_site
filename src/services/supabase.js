import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cyyjhqrlnaglnvlehyvc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5eWpocXJsbmFnbG52bGVoeXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NTg3MTIsImV4cCI6MjA1MzUzNDcxMn0.TPYIH9AXu5ikz0Oh3vuIjBy5kvvBdBMdpLyw2bziL1g';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
