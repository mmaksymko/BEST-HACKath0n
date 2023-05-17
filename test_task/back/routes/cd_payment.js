const express = require("express")
const router = express.Router()
const paymentController = require('../controllers/cd_payment_controller')

router.route('/')
    .post(paymentController.addCreditOrDepositPayment)

router.route('/:id')
    .get(paymentController.getCreditOrDepositPayment)
    .patch(paymentController.editCreditOrDepositPayment)
    .delete(paymentController.removeCreditOrDepositPayment)

router.route('/all/:cd_id')
    .get(paymentController.getCreditOrDepositPayments)

module.exports = router