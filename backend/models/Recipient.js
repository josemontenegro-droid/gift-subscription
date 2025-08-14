const mongoose = require('mongoose');

const RecipientSchema = new mongoose.Schema({
  name: String,
  address: String,
  giftPreferences: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Recipient', RecipientSchema);
"Add Recipient model"
