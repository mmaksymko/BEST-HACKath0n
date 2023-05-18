const database = require('../database')
const Validator = require('../middleware/validator')


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
        if (!new Validator()
            .isID(req.params.id)
            .datesAreInOrder(req.query.date_start, req.query.date_end)
        ) throw 'Bad input data'

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
    let body = req.body
    try {
        if (!new Validator()
            .isID(body.user_id)
            .isDate(body.operation_date)
            .isNumber(body.summa)
            .isString(body.descript)
        ) throw 'Bad input data'

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

// id, operation_date, summa, descript
const editTransaction = (req, res) => {
    let body = req.body
    try {
        if (!new Validator()
            .isID(req.params.id)
            .isDate(body.operation_date)
            .isNumber(body.summa)
            .isString(body.descript)
        ) throw 'Bad input data'

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

// id
const deleteTransaction = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
        ) throw 'Bad input data'

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

// id, date_end, date_start
const getExprenses = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
            .datesAreInOrder(req.query.date_start, req.query.date_end)
        ) throw 'Bad input data'

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

// id, date_end, date_start
const getProfits = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
            .datesAreInOrder(req.query.date_start, req.query.date_end)
        ) throw 'Bad input data'

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