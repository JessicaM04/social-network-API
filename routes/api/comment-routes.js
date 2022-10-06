const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<networkId>
router.route('/:networkId').post(addComment);

// /api/comments/<networkId>/<commentId>
router
  .route('/:networkId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<networkId>/<commentId>/<replyId>
router.route('/:networkId/:commentId/:replyId').delete(removeReply);

module.exports = router;
