const { Comment, Network } = require('../models');

const commentController = {
  // add comment to network
  addComment({ params, body }, res) {
    console.log(params);
    Comment.create(body)
      .then(({ _id }) => {
        return Network.findOneAndUpdate(
          { _id: params.networkId },
          { $push: { comments: _id } },
          { new: true }
        );
      })
      .then(dbNetworkData => {
        console.log(dbNetworkData);
        if (!dbNetworkData) {
          res.status(404).json({ message: 'No network found with this id!' });
          return;
        }
        res.json(dbNetworkData);
      })
      .catch(err => res.json(err));
  },

  // add reply to comment
  addReply({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbNetworkData => {
        if (!dbNetworkData) {
          res.status(404).json({ message: 'No network found with this id!' });
          return;
        }
        res.json(dbNetworkData);
      })
      .catch(err => res.json(err));
  },

  // remove comment
  removeComment({ params }, res) {
    Comment.findOneAndDelete({ _id: params.commentId })
      .then(deletedComment => {
        if (!deletedComment) {
          return res.status(404).json({ message: 'No comment with this id!' });
        }
        return Network.findOneAndUpdate(
          { _id: params.networkId },
          { $pull: { comments: params.commentId } },
          { new: true }
        );
      })
      .then(dbNetworkData => {
        if (!dbNetworkData) {
          res.status(404).json({ message: 'No network found with this id!' });
          return;
        }
        res.json(dbNetworkData);
      })
      .catch(err => res.json(err));
  },
  // remove reply
  removeReply({ params }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $pull: { replies: { replyId: params.replyId } } },
      { new: true }
    )
      .then(dbNetworkData => res.json(dbNetworkData))
      .catch(err => res.json(err));
  }
};

module.exports = commentController;
