const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Webhook endpoint
router.post('/webhook', async (req, res) => {
  const event = req.body;
  if (event.event_type === 'BILLING.SUBSCRIPTION.ACTIVATED') {
    const paypalSubscriberId = event.resource.subscriber.payer_id;
    console.log('Subscription activated for PayPal ID:', paypalSubscriberId);
  }
  res.status(200).send('Webhook received');
  "Add paypal routes"
