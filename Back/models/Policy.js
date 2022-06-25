const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const PolicySchema = new mongoose.Schema({
 
    ip: {
      type: String,
     
    }
       
  },opts);
  
  const Policy = mongoose.model("Policy", PolicySchema);

  module.exports = Policy;
