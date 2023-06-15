const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // Add any additional validations or properties for the email field
  },
  address: {
    type: String,
    required: true,
    // Add any additional validations or properties for the address field
  },
  contactNumber: {
    type: String,
    required: true,
    // Add any additional validations or properties for the contactNumber field
  },
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
