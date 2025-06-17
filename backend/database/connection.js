// Database Connection Logi
const { Sequelize, DataTypes } = require("sequelize");

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

module.exports = db;
