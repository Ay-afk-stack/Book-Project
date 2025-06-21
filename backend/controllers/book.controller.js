const { Book } = require("../database/connection");

// Get All Books
const fetchBooks = async (req, res) => {
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
};

// Create a Book
const addBook = async (req, res) => {
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
};

//Get Single Book
const fetchSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findByPk(id);
    if (!data) {
      res.status(404).json({ message: "No Book Found!" });
      return;
    }
    res.status(200).json({ message: "Book fetched successfully!", data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

// Delete Book
const deleteBook = async (req, res) => {
  try {
    res.status(200).json({ message: "Book deleted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

// Patch Book
const updateBook = async (req, res) => {
  try {
    res.status(200).json({ message: "Book updated successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

module.exports = {
  fetchSingleBook,
  addBook,
  fetchBooks,
  deleteBook,
  updateBook,
};
