const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const FGSchema = new mongoose.Schema({
 
    ips: {
      type: String,
     
    }
       
  },opts);
  
  const  FG = mongoose.model("FG", FGSchema);

  module.exports = FG;
