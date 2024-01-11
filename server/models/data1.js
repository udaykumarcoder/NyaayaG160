const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  barRegistrationNumber: { type: String, required: true},
  courtType: { type: String, required: true },
  courtName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  
  otp: { type: String, required: true },
}, { collection: 'Advocate' });

const UserData = mongoose.model('UserData', userSchema);

module.exports=UserData;


















