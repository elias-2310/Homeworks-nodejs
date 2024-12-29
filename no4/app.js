const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the static HTML file
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'templates', 'page.html');
  res.sendFile(filePath);
});

// API endpoint for book data (optional)
app.get('/api/book', (req, res) => {
  const bookData = {
    title: "Book Component by Function",
    subtitle: "Scope & Closures - JS",
    author: "Kyle Simpson",
    description: "Parts of the language that many JavaScript programmers simply avoid."
  };
  res.json(bookData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
