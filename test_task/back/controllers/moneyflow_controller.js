const database = require('../database')

const getAllTransactions = (req, res) => {
    try {
        database.connection.query(`
        SELECT * FROM moneyflow`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
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
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const addTransaction = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        INSERT INTO 
           moneyflow(user_id, operation_date, summa, descript)
        VALUES (${body.user_id}, '${body.operation_date}', ${body.summa}, '${body.descript}')`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const editTransaction = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE moneyflow 
                SET operation_date = '${body.operation_date}', summa = ${body.summa}, descript = '${body.descript}'
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

const deleteTransaction = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM moneyflow
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

const getExprenses = (req, res) => {
    try {
        database.connection.query(`
        SELECT id, operation_date, summa, descript
            FROM moneyflow
        WHERE user_id=${req.params.id} AND
              summa < 0 AND
              operation_date < '${req.query.date_end}' AND 
              operation_date > '${req.query.date_start}'`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
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
    getTransactions,
    getAllTransactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
    getExprenses,
    getProfits
}