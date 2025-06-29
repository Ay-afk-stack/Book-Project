// Database Connection Logi
const { Sequelize, DataTypes } = require("sequelize");

const bookModel = require("./models/book.model");

const connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful, Database Connected!");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Book = bookModel(sequelize, DataTypes);

//Migration code
sequelize
  .sync({ alter: false })
  .then(() => console.log("Migration successful 🚀!"))
  .catch((err) => console.log("Migration Error 😔:", err));

module.exports = db;
