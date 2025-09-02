import prisma from "./src/lib/prisma";

async function testConnection() {
  try {
    const now = await prisma.$queryRaw`SELECT NOW()`;
    console.log("✅ Connexion réussie !");
    console.log("Heure serveur :", now);
  } catch (error) {
    console.error("❌ Erreur de connexion à la base :", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
