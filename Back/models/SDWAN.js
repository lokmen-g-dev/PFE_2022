const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const SDWANSchema = new mongoose.Schema({
 
    nom: {
      type: String,
    
    },
    interface: {
      type: String,
    
    },
   
    
  },opts);
  
  const SDWAN = mongoose.model("SDWAN", SDWANSchema);

  module.exports =SDWAN;
