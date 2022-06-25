const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const ZoneSchema = new mongoose.Schema({
 
    Nom: {
      type: String,
     
    },
    interface:{
        type: String,
      default: "outside-TT (port1)",


    }
       
  },opts);
  
  const zone = mongoose.model("zone", ZoneSchema);

  module.exports = zone;
