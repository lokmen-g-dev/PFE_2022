const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const addSchema = new mongoose.Schema({
 
    name: {
      type: String,
      required: true,
    },
    ip:{
      type: String,
        required:true,

    },
    user: {
      type: String,
      required: true,
    }, 
    password: {
      type: String,
      required:true,
  },
 
    
  },opts);
  
  const ajoute = mongoose.model("ajoute", addSchema);

  module.exports = ajoute;
