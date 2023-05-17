const database = require('../database')

const getAllTransactions = (req, res) => {
    try {
        database.connection.query(`
        SELECT * FROM moneyflow`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const getTransactions = (req, res) => {
    try {
        database.connection.query(`
        SELECT id, operation_date, summa, descript
            FROM moneyflow
        WHERE user_id=${req.params.id} AND
        operation_date < '${req.query.date_end}' AND 
        operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const addTransaction = (req, res) => {
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
}

const editTransaction = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE moneyflow 
                SET operation_date = '${body.operation_date}', summa = ${body.summa}, descript = '${body.descript}'
            WHERE id = ${req.params.id}`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
}

const deleteTransaction = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM moneyflow
        WHERE id=${req.params.id}`)
    }
    catch (e) {
        console.log(e)
    };
}

const getExprenses = (req, res) => {
    try {
        database.connection.query(`
        SELECT id, operation_date, summa, descript
            FROM moneyflow
        WHERE user_id=${req.params.id} AND
              summa < 0 AND
              operation_date < '${req.query.date_end}' AND 
              operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const getProfits = (req, res) => {
    try {
        database.connection.query(`
        SELECT id, operation_date, summa, descript
            FROM moneyflow
        WHERE user_id=${req.params.id} AND
              summa > 0 AND
              operation_date < '${req.query.date_end}' AND 
              operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

module.exports = {
    getTransactions,
    getAllTransactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
    getExprenses,
    getProfits
}