import { Client } from "pg";

// Remplace par ton DATABASE_URL
const client = new Client({
  connectionString: "postgresql://postgres.ctjuudplhhfpssfsryqj:AGBE1997agbe@aws-1-eu-north-1.pooler.supabase.com:6543/postgres"
});

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Connexion réussie !");
    const res = await client.query("SELECT NOW()");
    console.log("Heure serveur:", res.rows[0]);
  } catch (err) {
    console.error("❌ Erreur de connexion :", err.message);
  } finally {
    await client.end();
  }
}

testConnection();
