const database = require('../database')

const addCreditOrDepositPayment = (req, res) => {
    console.log(0)
    try {
        let body = req.body

        database.connection.query(`
        INSERT INTO 
            cd_payment(cd_id, operation_date, amount)
        values (${body.cd_id}, '${body.operation_date}', ${body.amount})`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const getCreditOrDepositPayment = (req, res) => {
    try {
        database.connection.query(`
        SELECT operation_date, amount
            FROM cd_payment

        WHERE id = ${req.params.id}`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const editCreditOrDepositPayment = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        UPDATE cd_payment
            SET operation_date = '${body.operation_date}', amount = ${body.amount}
        WHERE id=${req.params.id}`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const removeCreditOrDepositPayment = (req, res) => {
    try {
        database.connection.query(`
        DELETE
            FROM cd_payment
        WHERE id=${req.params.id}`,
            () => res.status(204))
        res.status(204)
    }
    catch (e) {
        res.status(400).send(JSON.stringify(err))
    };
}

const getCreditOrDepositPayments = (req, res) => {
    try {
        database.connection.query(`
        SELECT id, operation_date, amount
            FROM cd_payment
        WHERE cd_id=${req.params.cd_id}`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}
module.exports = {
    getCreditOrDepositPayment,
    addCreditOrDepositPayment,
    removeCreditOrDepositPayment,
    editCreditOrDepositPayment,
    getCreditOrDepositPayments,
}