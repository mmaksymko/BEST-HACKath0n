const database = require('../database')

const login = async(req, res) => {
    try {
        database.connection.query(
            `SELECT *
             FROM user
             WHERE email = ${req.params.email} AND pass = ${req.params.pass}`,
            function (err, rows, fields){
                if(err)
                    res.status(500).send(JSON.stringify(`Error ${err.errno}: ${err.sqlMessage}`))
                if(rows.length == 0)
                    res.status(404).send(JSON.stringify(`Error 404 : User not found.`))
                res.status(200).send(rows)
            }
        )
    } catch (error) {
        res.status(400).send(JSON.stringify(err))
    }
}

module.exports = {
    login
}