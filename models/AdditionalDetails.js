const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  contactNo: {
    type: Number,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model("AdditionalDetails", detailsSchema);
