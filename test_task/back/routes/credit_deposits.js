const express = require("express")
const router = express.Router()
const employeesController = require('../controllers/credit_deposit_controller')

router.route('/')
    .get(employeesController.getAllCreditsOrDeposits)
    .post(employeesController.addCreditOrDeposit)

router.route('/:id')
    .get(employeesController.getCreditOrDeposit)
    .patch(employeesController.editCreditOrDeposit)
    .delete(employeesController.deleteCreditOrDeposit)

router.route('/in_period/:user_id')
    .get(employeesController.getUsersCreditsOrDeposits)

module.exports = router