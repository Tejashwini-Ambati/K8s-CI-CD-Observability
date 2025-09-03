const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.get('/order', async (req, res) => {
  try {
    const product = await axios.get('http://product-service:3001/product');
    res.json({ orderId: 123, item: product.data });
  } catch (err) {
    res.status(500).send('Failed to fetch product');
  }
});

app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});
