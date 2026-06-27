const mongoose = require("mongoose");
// Schema (structure + rules)
const clientSchema = new mongoose.Schema({
  name: {
    type: String, // datatype
  },

  email: {
    type: String, // datatype
  },
  city: {
    type: String,
  },
  message: {
    type: String,
  },
  mo: {
    type: Number, // datatype
  },
  createdAt: {
    type: Date, // datatype
    default: Date.now, // auto set current date
  },
});

// Model
const shree = mongoose.model("Client",clientSchema);
 module.exports=shree;