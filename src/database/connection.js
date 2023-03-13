const pg = require('pg');

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('environment variable is not set');
}

const db = new pg.Pool({
  connectionString: process.env.NEXT_PUBLIC_SUPABASE_URL,
});

export default db;
