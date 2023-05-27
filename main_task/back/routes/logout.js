const express = require("express")
const router = express.Router()
const refreshTokenController = require('../controllers/tokenController')

router.get('/', refreshTokenController.handleLogout)

module.exports = router