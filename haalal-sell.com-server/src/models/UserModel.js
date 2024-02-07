const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      split: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("users", DataSchema);
module.exports = User;
