const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  subscriptionLevel: { type: String, default: 'once' },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipient' }]
});

module.exports = mongoose.model('User', UserSchema);
"Add User model"
