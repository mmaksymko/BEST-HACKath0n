const express = require("express")
const router = express.Router()
const employeesController = require('../controllers/credit_deposit_controller')

router.route('/')
    .get(employeesController.getAllCreditsOrDeposits)
    .post(employeesController.addCreditOrDeposit)

router.route('/:id')
    .get(employeesController.getUsersCreditsOrDeposits)
    .patch(employeesController.editCreditOrDeposit)
    .delete(employeesController.deleteCreditOrDeposit)

module.exports = router