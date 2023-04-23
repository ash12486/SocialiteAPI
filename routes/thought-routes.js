const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../controllers/thought-controllers');

// /api/thoughts
router.route('/api/thoughts')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:thoughtId
router.route('/api/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/api/thoughts/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/api/thoughts/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
