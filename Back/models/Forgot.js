const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const oublierSchema = new mongoose.Schema({
 
    email: {
      type: String,
     
    }
       
  },opts);
  
  const oublier = mongoose.model("oublier", oublierSchema);

  module.exports = oublier;
