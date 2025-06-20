require("dotenv").config();
require("./database/connection");

const express = require("express");
const app = express();
const port = process.env.PORT;

//Logic to Fetch books from database
app.get("/books", (req, res) => {
  return res.json({ message: "Books fetched successfully!" });
});

//logic to fetch a particular book
app.get("/books/:id", (req, res) => {
  return res.json({ message: "Book fetched successfully!" });
});

//logic to add books to database
app.post("/books", (req, res) => {
  return res.json({ message: "Book added successfully!" });
});

//logic to delete a book
app.delete("/books/:id", (req, res) => {
  return res.json({ message: "Book deleted successfully!" });
});

//logic to update a book
app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: "Book updated successfully!", id });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
