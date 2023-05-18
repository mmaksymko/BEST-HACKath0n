const express = require("express")
const router = express.Router()
const moneyflowController = require('../controllers/moneyflow_controller')

router.route('/')
    .get(moneyflowController.getAllTransactions)
    .post(moneyflowController.addTransaction)

router.route('/:id')
    .get(moneyflowController.getTransactions)
    .patch(moneyflowController.editTransaction)
    .delete(moneyflowController.deleteTransaction)

router.route('/expenses/:id')
    .get(moneyflowController.getExprenses)

router.route('/profits/:id')
    .get(moneyflowController.getProfits)

module.exports = router