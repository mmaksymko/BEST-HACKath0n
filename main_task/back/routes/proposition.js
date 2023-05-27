const express = require("express")
const router = express.Router()
const propositionController = require('../controllers/propositionController')

router.route('/:id')
    .get(propositionController.getProposition)
    .post(propositionController.addProposition)
    .put(propositionController.changePropositionStatus)

router.route('/author/:id')
    .get(propositionController.getAuthorByPropositionId)


router.route('/all')
    .get(propositionController.getAllPropositions)

router.route('/all/:id')
    .get(propositionController.getAllUsersPropositions)

router.route('/all_except/:id')
    .get(propositionController.getAllExceptUsersPropositions)

module.exports = router