const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };

const alertSchema = new mongoose.Schema({
 
    Objet: {
      type: String,
      required: true // I'm writting about such one
     
    },
    description:{
      type: String,
      required: true // I'm writting about such one

         },
   
    Operateur:{
      type:String
    },
    Client:{ type: mongoose.Types.ObjectId, ref: "Ajouter" },
  
      Reponse:{
        type:String,
      }
    
       
  },opts);
  
  const alert = mongoose.model("alert", alertSchema);

  module.exports = alert;
