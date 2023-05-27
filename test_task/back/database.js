require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)

setInterval(() => {
    connection.query('SELECT 1');
}, 60000);

exports.connection = connection