const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const FG01Schema = new mongoose.Schema({
 
    ips: {
      type: String,
     
    }
       
  },opts);
  
  const FG01 = mongoose.model("FG01", FG01Schema);

  module.exports = FG01;
