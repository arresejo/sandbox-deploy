const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Endpoint "hello" (GET)
app.get('/hello', (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Endpoint "hello" (POST) avec un nom personnalisé
app.post('/hello', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Le champ 'name' est requis." });
  }
  res.json({ message: `Hello, ${name}!` });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});