const express = require("express")
const router = express.Router()
const userController = require('../controllers/user_controller')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.addUser)

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.editUser)
    .delete(userController.removeUser)

router.route('/signup')
    .post(userController.addUser)
router.route('/login')
    .post(userController.checkUser)

module.exports = router