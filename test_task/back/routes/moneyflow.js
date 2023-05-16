const express = require("express")
const router = express.Router()
const moneyflowController = require('../controllers/moneyflow_controller')

router.route('/')
    .get(moneyflowController.addTransaction)
    .post(moneyflowController.addTransaction)
    .patch(moneyflowController.editTransaction)
    .delete(moneyflowController.deleteTransaction)

module.exports = router