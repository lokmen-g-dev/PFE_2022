const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const RouteSchema = new mongoose.Schema({
 
    ips: {
      type: String,
    
    },
   
    
  },opts);
  
  const route = mongoose.model("route", RouteSchema);

  module.exports =route;
