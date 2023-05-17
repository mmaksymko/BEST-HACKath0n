const express = require('express')
const cors = require('cors')
const cdRouter = require('./routes/credit_deposits')
const moneyflowRouter = require('./routes/moneyflow')
const userRouter = require('./routes/user')
const transactionRouter = require('./routes/cd_payment')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/moneyflow', moneyflowRouter)
app.use('/credit_deposit', cdRouter)
app.use('/user', userRouter)
app.use('/cd_payment', transactionRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})