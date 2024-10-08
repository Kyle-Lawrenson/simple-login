const {Sequelize} = require("sequelize");

const SQLconnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {host: process.env.DB_HOST,
    dialect: process.env.DIALECT}
);

try {
    SQLconnection.authenticate();
    console.log("Successfully connected to Database");}
catch (error) {
    console.log(error);}

module.exports = SQLconnection