const express = require('express');
const app = express();
const PORT = 3001;

app.get('/product', (req, res) => {
  res.json({ product: 'Laptop', price: 1200 });
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
