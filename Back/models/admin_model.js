const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const AdminSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
},opts);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
