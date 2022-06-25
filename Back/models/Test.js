const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const testSchema = new mongoose.Schema({
 
        0: {
      type: String,
               },
        _id:{
            type: String,
        }
       
  },opts);
  
  const test = mongoose.model("test", testSchema);

  module.exports = test;
