const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const networkRoutes = require('./network-routes');

router.use('/comments', commentRoutes);
router.use('/networks', networkRoutes);

module.exports = router;
