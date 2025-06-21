const { Book } = require("../database/connection");

const fetchBooks = async (req, res) => {
  try {
    const data = await Book.findAll();
    if (data.length === 0) {
      res.status(200).json({ message: "Books not found!" });
    }
    res.status(200).json({ message: "Books fetched successfully!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const addBook = async (req, res) => {
  try {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    if (!bookName || !bookPrice) {
      res.status(400).json({ message: "Atleast Enter book's name and price!" });
      return;
    }
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

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findByPk(id);
    if (!data) {
      res.status(404).json({ message: "No Book Found!" });
      return;
    }
    const { bookName } = data;
    await Book.destroy({ where: { id } });
    res.status(200).json({ message: `${bookName} deleted successfully!` });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Book.findByPk(id);
    if (!data) {
      res.status(404).json({ message: "No Book Found!" });
      return;
    }
    const oldBookName = data.bookName;
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    await Book.update(
      { bookName, bookGenre, bookPrice, bookAuthor },
      { where: { id } }
    );
    res
      .status(200)
      .json({ message: `${oldBookName} updated to ${bookName} successfully!` });
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
