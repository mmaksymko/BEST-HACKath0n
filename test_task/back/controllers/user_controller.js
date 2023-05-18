const database = require('../database')

const Validator = require('../middleware/validator')

const getUser = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
        ) throw 'Bad input data'

        database.connection.query(`
    SELECT firstName, lastName, birthday, email
        FROM user
    WHERE id=${req.params.id}`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const getAllUsers = (req, res) => {
    try {
        database.connection.query(`
    SELECT id, firstName, lastName, birthday, email
        FROM user`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(rows)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const addUser = (req, res) => {
    let body = req.body
    try {
        if (!new Validator()
            .isString(body.firstName)
            .isString(body.lastName)
            .isDate(body.birthday)
            .isEmail(body.email)
            .isString(body.pass)
        ) throw 'Bad input data'

        database.connection.query(`
        INSERT INTO 
           user(firstName, lastName, birthday, email, pass)
        VALUES ('${body.firstName}', '${body.lastName}', '${body.birthday}', '${body.email}', '${body.pass}')`,
            (err, rows, fields) => {
                if (!err) res.status(200).send(body)
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            })
    }
    catch (err) {
        res.status(400).send(JSON.stringify(err))
    };
}

const editUser = (req, res) => {
    let body = req.body
    try {
        if (!new Validator()
            .isString(body.firstName)
            .isString(body.lastName)
            .isDate(body.birthday)
            .isEmail(body.email)
            .isID(req.params.id)
        ) throw 'Bad input data'

        database.connection.query(`
            UPDATE user
                SET firstName = '${body.firstName}', lastName = '${body.lastName}', birthday = '${body.birthday}', email = '${body.email}'
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
const removeUser = (req, res) => {
    try {
        if (!new Validator()
            .isID(req.params.id)
        ) throw 'Bad input data'

        database.connection.query(
            `DELETE
            FROM user
        WHERE id=${req.params.id}`),
            (err, rows, fields) => {
                if (!err) {
                    res.status(204)
                }
                else res.status(400).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
            }
    }
    catch (err) {
        res.status(404).send(JSON.stringify(err))
    };
}

module.exports = {
    getUser,
    getAllUsers,
    addUser,
    editUser,
    removeUser
}