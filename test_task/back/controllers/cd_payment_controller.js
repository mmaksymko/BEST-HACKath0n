const database = require('../database')
const Validator = require('../middleware/validator')

const addCreditOrDepositPayment = (req, res) => {
    let body = req.body
    try {
        if (!new Validator()
            .isID(body.cd_id)
            .isDate(body.operation_date)
            .isNumber(body.amount).validated
        ) throw 'Bad input data'

        database.connection.query(`
        SELECT operation_type FROM credit_deposit WHERE id = ${body.cd_id}`,
            (err, rows, fields) => {
                if (!err && rows.length === 1) {
                    body.amount = rows.operation_type == 'credit' ? Math.abs(body.amount) : Math.abs(body.amount) * -1

                    database.connection.query(`
                    INSERT INTO 
                        cd_payment(cd_id, operation_date, amount)
                    VALUES(${body.cd_id}, '${body.operation_date}', ${body.amount})`,
                        (err, rows, fields) => {
                            if (!err) res.status(200).send(body)
                            else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
                        })
                }
                else if (!err) res.status(400).send(JSON.stringify(`Bad input data`))
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const getCreditOrDepositPayment = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
        ) throw 'Bad input data'

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
    let body = req.body
    try {
        if (!new Validator()
            .isDate(body.operation_date)
            .isNumber(body.amount).validated
        ) throw 'Bad input data'

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
        if (!new Validator()
            .isID(req.params.id)
        ) throw 'Bad input data'

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
        if (!new Validator()
            .isID(req.params.cd_id)
        ) throw 'Bad input data'

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