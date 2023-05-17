const database = require('../database')

const getAllCreditsOrDeposits = (req, res) => {
    try {
        database.connection.query(`
        SELECT cd.id, cd.operation_date, months, duration, total_amount, abs(CAST(((sum(amount)-(SELECT sum(amount) from cd_payment))) AS DECIMAL(13,2))) as paid, interest_rate, descript FROM (
            SELECT id, operation_date, TIMESTAMPDIFF(MONTH, operation_date, CURDATE()) as months, duration, total_amount, interest_rate, descript
                FROM credit_deposit
            ) AS CD
            INNER JOIN cd_payment ON cd_payment.cd_id!=CD.id
        GROUP BY id`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const addCreditOrDeposit = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        INSERT INTO
        credit_deposit(user_id, operation_date, duration, total_amount, interest_rate, operation_type, descript)
        VALUES(${body.user_id}, '${body.operation_date}', ${body.duration}, ${body.total_amount}, ${body.interest_rate}, '${body.operation_type}', '${body.descript}')`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const getCreditOrDeposit = (req, res) => {
    try {
        database.connection.query(`
        SELECT cd.id, cd.operation_date, months, duration, total_amount, abs(CAST(((sum(amount)-(SELECT sum(amount) from cd_payment))) AS DECIMAL(13,2))) as paid, interest_rate, descript FROM (
            SELECT id, operation_date, TIMESTAMPDIFF(MONTH, operation_date, CURDATE()) as months, duration, total_amount, interest_rate, descript
                FROM credit_deposit
            WHERE id=${req.params.id} 
            ) AS CD
            INNER JOIN cd_payment ON cd_payment.cd_id!=CD.id
        GROUP BY id`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const editCreditOrDeposit = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE credit_deposit 
                SET operation_date = '${body.operation_date}', duration = ${body.duration}, total_amount = ${body.total_amount}, interest_rate = ${body.interest_rate}, operation_type = '${body.operation_type}', descript = '${body.descript}'
            WHERE id = ${req.params.id}`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const deleteCreditOrDeposit = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM credit_deposit
        WHERE id=${req.params.id}`),
            (err, rows, fields) => {
                if (!err) res.status(204)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            }
    }
    catch (err) {
        res.status(404).send(JSON.stringify(err))
    };
}

const getUsersCreditsOrDeposits = (req, res) => {
    try {
        database.connection.query(`
        SELECT cd.id, cd.operation_date, months, duration, total_amount, abs(CAST(((sum(amount)-(SELECT sum(amount) from cd_payment))) AS DECIMAL(13,2))) as paid, interest_rate, descript FROM (
            SELECT id, operation_date, TIMESTAMPDIFF(MONTH, operation_date, CURDATE()) as months, duration, total_amount, interest_rate, descript
                FROM credit_deposit
            WHERE user_id=${req.params.user_id}  AND
                operation_type='${req.query.operation_type}' AND
                operation_date < '${req.query.date_end}' AND 
                operation_date > '${req.query.date_start}' 
            ) AS CD
            INNER JOIN cd_payment ON cd_payment.cd_id!=CD.id
        GROUP BY id`,
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
    getAllCreditsOrDeposits,
    addCreditOrDeposit,
    getCreditOrDeposit,
    editCreditOrDeposit,
    deleteCreditOrDeposit,
    getUsersCreditsOrDeposits
}