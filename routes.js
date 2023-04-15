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

} = require('./controllers/thought-controllers');
const {
  addReaction,
  removeReaction,
} = require('./controllers/reaction-controllers');

// /api/users
router.route('/users')
  .get(getAllUsers)
  .post(createUser);

// /api/users/:userId
router.route('/users/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

// /api/thoughts
router.route('/thoughts')
  .get(getAllThoughts)
  .post(addThought);

// /api/thoughts/:thoughtId
router.route('/thoughts/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/reaction')
  .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
