const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: "test",
    user: "root",
    password: ""
})

connection.connect(err => {
    if (err)
        throw err
    else
        console.log('success');
})

exports.connection = connection