const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name has to be provided"],
  },
  email_id: {
    type: String,
    required: [true, "Email has to be provided"],
  },
  phone_number: {
    type: String,
    required: [true, "Phone Number has to be provided"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation has to be provided"],
  },
  state: {
    type: String,
    required: [true, "State has to be provided"],
  },
  organization: {
    type: String,
    required: [true, "Organization has to be provided"],
  },
});

let userModel = mongoose.model("creds", userSchema);

module.exports = userModel;
