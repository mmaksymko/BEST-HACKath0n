require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://ltanxqcxpvhxywv9i3mk:pscale_pw_mJkdhcBe0dEUVgIyO1phcugcEaRReLRzMite4xOnoP4@aws.connect.psdb.cloud/besthackathon4yk?ssl={"rejectUnauthorized":true}')
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