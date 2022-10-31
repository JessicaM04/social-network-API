const { Network } = require('../models');

const networkController = {
  // get all networks
  getAllNetwork(req, res) {
    Network.find({})
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbNetworkData => res.json(dbNetworkData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one network by id
  getNetworkById({ params }, res) {
    Network.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbNetworkData => res.json(dbNetworkData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createNetwork
  createNetwork({ body }, res) {
    Network.create(body)
      .then(dbNetworkData => res.json(dbNetworkData))
      .catch(err => res.json(err));
  },

  // update network by id
  updateNetwork({ params, body }, res) {
    Network.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true
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

  // delete network
  deleteNetwork({ params }, res) {
    Network.findOneAndDelete({ _id: params.id })
      .then(dbNetworkData => res.json(dbNetworkData))
      .catch(err => res.json(err));
  }
};

module.exports = networkController;
