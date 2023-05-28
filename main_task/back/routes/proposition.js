const express = require("express")
const router = express.Router()
const propositionController = require('../controllers/propositionController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/:id/:performerID')
    .put(propositionController.acceptProposition)

router.route('/:id')
    .get(propositionController.getProposition)
    .post(propositionController.addProposition)
    .put(propositionController.completeProposition)

router.route('/author/:id')
    .get(propositionController.getAuthorByPropositionId)

router.route('/api/all')
    .get(propositionController.getAllPropositions)

router.route('/all/:id')
    .get(propositionController.getAllUsersPropositions)

router.route('/all-taken/:id')
    .get(propositionController.getAllUsersTakenPropositions)

router.route('/all-except/:id')
    .get(propositionController.getAllExceptUsersPropositions)

module.exports = router