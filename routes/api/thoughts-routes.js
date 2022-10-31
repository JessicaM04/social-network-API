const router = require('express').Router();
const {
  getAllNetwork,
  getNetworkById,
  createNetwork,
  updateNetwork,
  deleteNetwork
} = require('../../controllers/thoughtController');

// /api/networks
router
  .route('/')
  .get(getAllNetwork)
  .post(createNetwork);

// /api/networks/:id
router
  .route('/:id')
  .get(getNetworkById)
  .put(updateNetwork)
  .delete(deleteNetwork);

module.exports = router;
