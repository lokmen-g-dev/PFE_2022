const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const aler = require("../models/Alert");
const Client = require("./Client");
const parseJwt = require("../routes/Decode");
const jwt = require("jsonwebtoken");
sgMail.setApiKey(process.env.API_KEY);
const verify = require("./Verify");
const Operateur = require("../models/operateur_model");

router.post("/Add", async (req, res) => {
  console.log("salut");
  const token = req.header("Authorization");
  const tokenDecoded = await jwt.decode(token);
  console.log(tokenDecoded);
  const alerts = await new aler({
    Objet: req.body.Objet,
    description: req.body.description,
    Operateur: tokenDecoded.Client.operateur,
    Client: tokenDecoded.Client.id,
  });

  try {
    const savedalert = await alerts.save();
    //Add operateur
    console.log(savedalert);
    res.send(savedalert);
  } catch (err) {
    res.send({ message: err });
  }
});

router.get("/getalerts", async (req, res) => {
  const token = req.header("Authorization");
  const tokenDecoded = await jwt.decode(token);
  try {
    const getajoute = await aler.find({
      Operateur: tokenDecoded.Operateur.name,
    });
    console.log(getajoute);
    res.send(getajoute);
  } catch (err) {
    res.json({ message: err });
  }
});

// get  alert operateur
router.get("/list", verify, async (req, res) => {
  const token = req.header("Authorization");
  console.log(typeof token);
  const alert = parseJwt(token);
  console.log(typeof alert);
  console.log(alert);

  try {
    const alet = await aler.find({ objet: alert.Operateur });
    res.send(alet);
  } catch (err) {
    res.json({ message: err });
  }
});

///get alert client
router.get("/send", async (req, res) => {
  const token = req.header("Authorization");
  const tokenDecoded = jwt.decode(token);
  console.log(tokenDecoded);

  try {
    const alert = await aler.find({ Client: tokenDecoded.Client.id });
    res.send(alert);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedaler = await aler.findByIdAndDelete({ _id: req.params.id });
    console.log(deletedaler);
    res.send("deleted");
  } catch (err) {
    res.json({ message: err });
  }
});

//get by id
router.get("/get/:id", async (req, res) => {
  try {
    const getajoute = await aler.findById({ _id: req.params.id });
    res.send(getajoute);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delet operateur

router.post("/reponse/:idR", async (req, res) => {
  try {
    const alerts = await aler.findOneAndUpdate(
      { _id: req.params.Id },
      {
        $set: {
          Reponse: req.body.description,
        },
      },
      { new: true }
    );
    const savedalert = await alerts.save();
    //Add operateur
    console.log(savedalert);
    res.send(savedalert);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
