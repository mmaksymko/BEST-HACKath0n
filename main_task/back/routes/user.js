const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/get/:id/')
      .get(userController.getUser)

router.route('/signup')
      .post(userController.signup)

router.route('/login')
      .post(userController.login)


module.exports = router