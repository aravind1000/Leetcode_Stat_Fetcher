const express = require('express');
const router = express.Router();

let userData = {
  username: '',
  easyCount: 0,
  mediumCount: 0,
  hardCount: 0,
  totalSubmissions: 0
};

router.get('/', (req, res) => {
  res.json(userData);
});

router.post('/', (req, res) => {
  const { username, easyCount, mediumCount, hardCount, totalSubmissions } = req.body;
  userData = { username, easyCount, mediumCount, hardCount, totalSubmissions };
  res.status(201).send('User data updated successfully');
});

module.exports = router;
