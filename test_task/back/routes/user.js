const express = require("express")
const router = express.Router()
const userController = require('../controllers/user_controller')

router.route('/')
    .get(userController.getUser)
    .post(userController.addUser)
    .patch(userController.editUser)
    .delete(userController.removeUser)

module.exports = router