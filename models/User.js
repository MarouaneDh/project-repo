const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  role: {
    type: String,
    // required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    city: {
      type: String,
    },
  },
});
module.exports = User = mongoose.model("user", userSchema);
