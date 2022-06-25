const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Operateur = require("../models/operateur_model");
const Oublier = require("../models/Forgot");
const Joi = require("@hapi/joi");
const code = Math.floor(Math.random() * 10051);
console.log(code);

router.post("/forget", async (req, res) => {
  ///validate all the incoming data in the body
  //const { error } = InscrireSchema.validate(req.body);
  //if (error) return res.send(error.details[0].message);
  console.log(code);
  const emailcheck = await Operateur.findOne({
    email: req.body.email,
  });

  //inscrit client

  try {
    const savedclient = await emailcheck.save();

    // OTP

    console.log(savedclient.email);
    const message = {
      to: savedclient.email,
      from: "tnu.devops@gmail.com",
      subject: "Emai confirmation",
      templateId: "d-901023562e654d85a7857102fd6ebe3e",
      dynamic_template_data: {
        name: savedclient.name,
        code: code,
      },
    };
    console.log(savedclient.name);

    sgMail.send(message).then(() => {
      console.log("Email sent");
    });
    res.send(savedclient);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
