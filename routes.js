const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('./controllers/user-controllers');
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('./controllers/thought-controllers');

// /api/users
router.route('/api/users')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:userId
router.route('/api/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/api/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

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