const database = require('../database')

const getUsersCreditsOrDeposits = (req, res) => {
    try {
        database.connection.query(`
        SELECT *
            FROM credit_deposit
        WHERE user_id=${req.query.user_id} AND
            operation_type='${req.query.operation_type}' AND
        operation_date < '${req.query.date_end}' AND 
        operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const addCreditOrDeposit = (req, res) => {
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
}

const editCreditOrDeposit = (req, res) => {
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
}

const deleteCreditOrDeposit = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM credit_deposit
        WHERE id=${req.query.id}`)
    }
    catch (e) {
        console.log(e)
    };
}

module.exports = {
    getUsersCreditsOrDeposits,
    addCreditOrDeposit,
    editCreditOrDeposit,
    deleteCreditOrDeposit
}