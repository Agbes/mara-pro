// telecharge-temoignages.js
import fs from "fs";
import https from "https";
import path from "path";
import JSZip from "jszip";

const zip = new JSZip();
const outputFolder = path.join(process.cwd(), "avatars");

// Crée le dossier temporaire
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Liste des URLs des 18 avatars
const avatars = [
  "https://randomuser.me/portraits/women/32.jpg",
  "https://randomuser.me/portraits/men/45.jpg",
  "https://randomuser.me/portraits/women/65.jpg",
  "https://randomuser.me/portraits/men/28.jpg",
  "https://randomuser.me/portraits/women/52.jpg",
  "https://randomuser.me/portraits/men/11.jpg",
  "https://randomuser.me/portraits/women/47.jpg",
  "https://randomuser.me/portraits/men/36.jpg",
  "https://randomuser.me/portraits/women/14.jpg",
  "https://randomuser.me/portraits/men/72.jpg",
  "https://randomuser.me/portraits/women/20.jpg",
  "https://randomuser.me/portraits/men/67.jpg",
  "https://randomuser.me/portraits/women/30.jpg",
  "https://randomuser.me/portraits/men/58.jpg",
  "https://randomuser.me/portraits/women/44.jpg",
  "https://randomuser.me/portraits/men/70.jpg",
  "https://randomuser.me/portraits/women/12.jpg",
  "https://randomuser.me/portraits/men/48.jpg",
];

// Fonction pour télécharger une image
const downloadImage = (url, filename) =>
  new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const buffer = Buffer.concat(chunks);
        fs.writeFileSync(path.join(outputFolder, filename), buffer);
        resolve();
      });
    }).on("error", reject);
  });

const main = async () => {
  for (let i = 0; i < avatars.length; i++) {
    const filename = `${i + 1}.jpg`;
    console.log(`Téléchargement de ${filename}...`);
    await downloadImage(avatars[i], filename);
    // Ajoute au zip
    const data = fs.readFileSync(path.join(outputFolder, filename));
    zip.file(filename, data);
  }

  // Génère le zip
  const content = await zip.generateAsync({ type: "nodebuffer" });
  fs.writeFileSync("temoignages.zip", content);
  console.log("✅ Zip généré : temoignages.zip");
};

main();
