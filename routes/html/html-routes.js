const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/network-list.html'));
});

router.get('/add-network', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/add-network.html'));
});

router.get('/network', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/network.html'));
});

module.exports = router;
