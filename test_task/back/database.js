require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
setInterval(() =>  {
    connection.query('SELECT 1');
}, 60000);

// connection.end()
// const connection = mysql.createConnection({
//     host: 'fdb1029.awardspace.net',
//     port: 3306,
//     database: "4314950_hackathon4yk",
//     user: "4314950_hackathon4yk",
//     password: "SashaMarts1n"
// })

// connection.connect(err => {
//     if (err)
//         throw err
//     else
//         console.log('success');
// })

exports.connection = connection