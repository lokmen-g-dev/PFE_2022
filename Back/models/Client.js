const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const InscrireSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    operateur: {
      type: String,
    },
    valide: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      default: "en attente",
    },
    date_accept: {
      type: Date,
      default:0
    },
  },
  opts
);

const Ajouter = mongoose.model("Ajouter", InscrireSchema);

module.exports = Ajouter;
