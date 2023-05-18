require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://s9zon6vkgsoz7eiyxtxu:pscale_pw_ByOc3LEtwnrKIWwC59jcDwSAMfErhLGHJqFA6UuHLED@aws.connect.psdb.cloud/besthackathon4yk?ssl={"rejectUnauthorized":true}')
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