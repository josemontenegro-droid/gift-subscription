const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Recipient = require('../models/Recipient');
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify token
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(400).send('Invalid token');
  }
};

// Get recipients
router.get('/recipients', auth, async (req, res) => {
  const recipients = await Recipient.find({ user: req.userId });
  res.json(recipients);
});

// Add recipient
router.post('/recipients', auth, async (req, res) => {
  const { name, address, giftPreferences } = req.body;
  const recipient = await Recipient.create({ name, address, giftPreferences, user: req.userId });
  await User.findByIdAndUpdate(req.userId, { $push: { recipients: recipient._id } });
  res.json(recipient);
"Add Users routes"
