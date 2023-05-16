const express = require("express")
const router = express.Router()
const employeesController = require('../controllers/credit_deposit_controller')

router.route('/')
    .get(employeesController.addCreditOrDeposit)
    .post(employeesController.addCreditOrDeposit)
    .patch(employeesController.editCreditOrDeposit)
    .delete(employeesController.deleteCreditOrDeposit)

module.exports = router