const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Array to store product details
let products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

// GET endpoint to fetch product details
app.get('/products', (req, res) => {
  res.json(products);
});

// POST endpoint to add a new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  // Generate a random id for the new product
  const id = Math.floor(Math.random() * 1000) + 1;

  // Create the new product object
  const newProduct = { id, name, price };

  // Add the new product to the array
  products.push(newProduct);

  // Return the newly added product
  res.status(201).json(newProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
