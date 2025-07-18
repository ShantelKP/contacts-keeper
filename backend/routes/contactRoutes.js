const express = require('express');
const router = express.Router();

// Example GET route for contacts
router.get('/', (req, res) => {
  res.json([]); // Replace with actual DB logic
});

// Example POST route for contacts
router.post('/', (req, res) => {
  // Replace with actual DB logic
  const newContact = req.body;
  res.status(201).json(newContact);
});

module.exports = router;
