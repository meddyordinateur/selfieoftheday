const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const outputFile = path.join(__dirname, 'images.js');
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error("Erreur en lisant le dossier images :", err);
    return;
  }

  const images = files
    .filter(file => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => `images/${file}`);

  const content = `const images = [\n  ${images.map(i => `"${i}"`).join(',\n  ')}\n];\n`;

  fs.writeFile(outputFile, content, (err) => {
    if (err) console.error("Erreur en écrivant images.js :", err);
    else console.log(`images.js généré avec succès (${images.length} images).`);
  });
});