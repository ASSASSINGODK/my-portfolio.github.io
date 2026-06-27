const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// This will let Express serve ALL your files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// When someone opens http://localhost5:3000/, show your homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Change file name if your main file is different!
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🎌 AnimeInfinity is running at:`);
  console.log(`   Local: http://localhost:${port}`);
  console.log(`   Network: http://10.26.16.75:${port}`);
  console.log(`   Or: http://172.16.0.2:${port}`);
});