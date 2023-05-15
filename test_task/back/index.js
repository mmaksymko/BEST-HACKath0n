const express = require('express')
const cors = require('cors')
const database = require('./database')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/credit_deposit', (req, res) => {
    try {
        database.connection.query(`
        SELECT *
            FROM credit_deposit
        WHERE user_id=${req.query.user_id} AND operation_type='${req.query.operation_type}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
})

app.post('/credit_deposit', (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        INSERT INTO 
            credit_deposit(user_id, operation_date, duration, total_amount, current_amount, interest_rate, operation_type, descript)
        VALUES (${body.user_id}, '${body.operation_date}', ${body.duration}, ${body.total_amount}, ${body.current_amount}, ${body.interest_rate}, '${body.operation_type}', '${body.descript}')`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
})

app.patch('/credit_deposit', (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE credit_deposit 
                SET operation_date = '${body.operation_date}', duration = ${body.duration}, total_amount = ${body.total_amount}, current_amount = ${body.current_amount}, interest_rate = ${body.interest_rate}, operation_type = '${body.operation_type}', descript = '${body.descript}'
            WHERE id = ${body.id}`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
})

app.delete('/credit_deposit', (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM credit_deposit
        WHERE id=${req.query.id}`)
    }
    catch (e) {
        console.log(e)
    };
})

app.get('/moneyflow', (req, res) => {
    try {
        database.connection.query(`
        SELECT *
            FROM moneyflow
        WHERE user_id=${req.query.user_id}`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
})

app.post('/moneyflow', (req, res) => {
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

app.patch('/moneyflow', (req, res) => {
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

app.delete('/moneyflow', (req, res) => {
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

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})