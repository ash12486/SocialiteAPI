const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/reaction', reactionRoutes);

module.exports = router;
