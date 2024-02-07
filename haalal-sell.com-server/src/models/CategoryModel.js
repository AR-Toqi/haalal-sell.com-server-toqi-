const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryImg: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("categories", DataSchema);
module.exports = Category;
