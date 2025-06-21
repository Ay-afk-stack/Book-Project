const router = require("express").Router();
const {
  fetchBooks,
  addBook,
  fetchSingleBook,
  deleteBook,
  updateBook,
} = require("../controllers/book.controller");

router.route("/books").get(fetchBooks).post(addBook);

router
  .route("/books/:id")
  .get(fetchSingleBook)
  .delete(deleteBook)
  .patch(updateBook);

module.exports = router;
