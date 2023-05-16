const express = require("express")
const database = require('../database')
const router = express.Router()

router.get('/', (req, res) => {
    try {
        database.connection.query(`
        SELECT *
            FROM moneyflow
        WHERE user_id=${req.query.user_id} AND
        operation_date < '${req.query.date_end}' AND 
        operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
})

router.post('/', (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        INSERT INTO 
           moneyflow(user_id, operation_date, summa, descript)
        VALUES (${body.user_id}, '${body.operation_date}', ${body.summa}, '${body.descript}')`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
})

router.patch('/', (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE moneyflow 
                SET operation_date = '${body.operation_date}', summa = ${body.summa}, descript = '${body.descript}'
            WHERE id = ${body.id}`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
})

router.delete('/', (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM moneyflow
        WHERE id=${req.query.id}`)
    }
    catch (e) {
        console.log(e)
    };
})

module.exports = router