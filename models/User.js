const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide the name"],
    trim: true,
    maxlength: [50, "The name cannot be more of 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Must provide the email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must provide the password"],
    trim: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
