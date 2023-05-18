const database = require('../database')

const getUser = (req, res) => {
    try {
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
    try {
        let body = req.body
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
    try {
        let body = req.body
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

const removeUser = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM user
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

module.exports = {
    getUser,
    getAllUsers,
    addUser,
    editUser,
    removeUser
}