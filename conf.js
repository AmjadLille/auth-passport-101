const mysql = require("mysql2/promise");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASS, DB_SCHEMA, BACK_PORT } = process.env

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_SCHEMA
});

const backPort = BACK_PORT;

module.exports = {
    db,
    backPort
};
