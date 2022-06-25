const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const OperateurSchema = new mongoose.Schema({
 
    name: {
      type: String,
      required: true,
    },
  password: {
      type: String,
      required: true,
    },
   
    email:{
      type: String,
        required:true,

    },
    tel: {
      type: Number,
      required:true,
  },
    client:[{ type: mongoose.Types.ObjectId, ref: "Ajouter" }]
    
  },opts);
  
  const Operateur = mongoose.model("Operateur", OperateurSchema);

  module.exports = Operateur;
