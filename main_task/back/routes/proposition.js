const express = require("express")
const router = express.Router()
const propositionController = require('../controllers/propositionController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/:id')
    .get(verifyJWT, propositionController.getProposition)
    .post(verifyJWT, propositionController.addProposition)
    .put(verifyJWT, propositionController.completeProposition)

router.route('/:id/:performerID')
    .put(verifyJWT, propositionController.acceptProposition)

router.route('/author/:id')
    .get(verifyJWT, propositionController.getAuthorByPropositionId)

router.route('/api/all')
    .get(propositionController.getAllPropositions)

router.route('/all/:id')
    .get(verifyJWT, propositionController.getAllUsersPropositions)

router.route('/all-taken/:id')
    .get(verifyJWT, propositionController.getAllUsersTakenPropositions)

router.route('/all-except/:id')
    .get(verifyJWT, propositionController.getAllExceptUsersPropositions)

module.exports = router