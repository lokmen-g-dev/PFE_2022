const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const IPSchema = new mongoose.Schema({
 
    ips: {
      type: String,
     
    }
       
  },opts);
  
  const IP = mongoose.model("IP", IPSchema);

  module.exports = IP;
