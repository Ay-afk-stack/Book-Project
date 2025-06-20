require("dotenv").config();
require("./database/connection");

const express = require("express");
const { Book } = require("./database/connection");
const app = express();
const port = process.env.PORT;

app.use(express.json());

//logic to add books to database
app.post("/books", async (req, res) => {
  try {
    // Destructing book details from req.body
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    if (!bookName || !bookPrice) {
      // Validating Book details
      res.status(400).json({ message: "Atleast Enter book's name and price!" });
      return;
    }
    // Adding book details to the database
    await Book.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    });
    res.json({ message: `${bookName} added successfully!` });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
});

//Logic to Fetch books from database
app.get("/books", async (req, res) => {
  try {
    // Fetching all the books from the database
    const data = await Book.findAll();
    // Checking the no. of books
    if (data.length === 0) {
      res.status(200).json({ message: "Books not found!" });
    }

    res.status(200).json({ message: "Books fetched successfully!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
});

//logic to fetch a particular book
app.get("/books/:id", (req, res) => {
  res.json({ message: "Book fetched successfully!" });
});

//logic to delete a book
app.delete("/books/:id", (req, res) => {
  res.json({ message: "Book deleted successfully!" });
});

//logic to update a book
app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: "Book updated successfully!", id });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
