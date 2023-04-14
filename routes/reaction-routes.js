const router = require('express').Router();
const {
  addReaction,
  removeReaction
} = require('../../controllers/reaction-controller');

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
