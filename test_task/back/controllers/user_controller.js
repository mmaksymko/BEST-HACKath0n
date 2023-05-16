const database = require('../database')

const getUser = (req, res) => {
    try {
        database.connection.query(`
    SELECT firstName, lastName, birthday, email
        FROM user
    WHERE id=${req.params.id}`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const getAllUsers = (req, res) => {
    try {
        database.connection.query(`
    SELECT firstName, lastName, birthday, email
        FROM user`,
            (err, rows, fields) => res.send(rows))
    }
    catch (e) {
        console.log(e)
    };
}

const addUser = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
        INSERT INTO 
           user(firstName, lastName, birthday, email, pass)
        VALUES ('${body.firstName}', '${body.lastName}', '${body.birthday}', '${body.email}', '${body.pass}')`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
}

const editUser = (req, res) => {
    try {
        let body = req.body
        database.connection.query(`
            UPDATE user 
                SET firstName = '${body.firstName}', lastName = '${body.lastName}', birthday = '${body.birthday}', email = '${body.email}', pass = '${body.pass}'
            WHERE id = ${req.params.id}`,
            () => res.send(body))
    }
    catch (e) {
        console.log(e)
    };
}

const removeUser = (req, res) => {
    try {
        database.connection.query(
            `DELETE
            FROM user
        WHERE id=${req.params.id}`)
    }
    catch (e) {
        console.log(e)
    };
}

module.exports = {
    getUser,
    getAllUsers,
    addUser,
    editUser,
    removeUser
}