const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Operateur = require("../models/operateur_model");
const Oublier = require("../models/Forgot");
const Joi = require("@hapi/joi");

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

//login
router.post("/login", async (req, res) => {
  /////VALIDATE INCOMING ADMIN DATA
  const { error } = loginschema.validate(req.body); ///validate all the incoming data in the body
  if (error) return res.status(403).send(error.details[0].message);

  try {
    const operateur = await Operateur.findOne({ email: req.body.email });
    if (!operateur) return res.status(403).send("Account doesn't exists");
    console.log(operateur);

    const validpassword = await bcrypt.compare(
      req.body.password,
      operateur.password
    );
    //console.log(validpassword);
    if (!validpassword) return res.status(400).send("password is incorrect");
    const access_token = jwt.sign(
      { Operateur: { id: operateur.id, name: operateur.name } },
      process.env.ACCESS_TOKEN
    );
    console.log(access_token);
    res.send(access_token);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedOperateur = await Operateur.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log(deletedOperateur);
    res.send("deleted");
  } catch (err) {
    res.json({ message: err });
  }
});


function mail_liste(email, name) {
  
  console.log("Email sent");
  const message = {
    to: email,
    from: "tnu.devops@gmail.com",
    subject: "Email confirmation",
    templateId: "d-6b1a2a8ca17c471286368441d48d0b28",
    dynamic_template_data: {
      name: name
    },
  };

  sgMail.send(message);

  
  console.log("Email sent");
}

//add operateur

router.post("/signin", async (req, res) => {
  
  const emailcheck = await Operateur.findOne({
    email: req.body.email,
  });
  if (emailcheck) return res.status(400).send("Email already exists");
  
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  
  try{

      const operateur = await new Operateur({
        name: req.body.name,
        password: hashedpassword,
        email: req.body.email,
        tel: req.body.tel,
      });
      
      const savedOperateur = await operateur.save();
console.log(savedOperateur.email  )
      const message = {
         to: savedOperateur.email,
      from: process.env.GOOGLE_USER,
      subject: "Password Reset",
      text: `Dear ${savedOperateur.name} please reset your password using this link: ${link}`,
      
        }

        sgMail.send(message);
          console.log("Email sent");


  } catch (err) {
    res.json({ message: err });
  }

}); 


router.get("/overview", async (req, res) => {
  try {
    const operateur = await Operateur.find();
    console.log(operateur)
    res.send(operateur);
  } catch (err) {
    res.json({ message: err });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedOperateur = await Operateur.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log(deletedOperateur);
    res.send("deleted");
  } catch (err) {
    res.json({ message: err });
  }
});
//get profile
router.get("/gets", async (req, res) => {
  try {
    const operateur = await Operateur.find();
    res.send(operateur);
  } catch (err) {
    res.json({ message: err });
  }
});
//get:operateur
router.get("/gets/:id", async (req, res) => {
  try {
    const getajoute = await Operateur.findById({ _id: req.params.id });
    res.send(getajoute);
  } catch (err) {
    res.json({ message: err });
  }
});

// update


router.patch("/update/:id", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    const operateur = await Operateur.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: hashedpassword,
          tel: req.body.tel,
        },
      },
      { new: true }
    );
    res.send(operateur);
    console.log(operateur);
  } catch (err) {
    res.json({ message: err });
  }
});

// forget password

router.post("/forget", async (req, res) => {
  const emailcheck = await Operateur.findOne({
    email: req.body.email,
  });
  if (!emailcheck) return res.status(400).send("Email already exists");
  try {
    //Add operateur
    const message = {
      to: Operateur.email,
      from: "tnu.devops@gmail.com",
      subject: "Email confirmation",
      templateId: "d-901023562e654d85a7857102fd6ebe3e",
      dynamic_template_data: {
        email: Operateur.email,
      },
    };
    console.log("sennd");

    sgMail
      .send(message)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    res.send({ message: err });
  }
});

//accepter client
router.patch("/update/:id", async (req, res) => {
  try {
    const operateur = await client.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: hashedpassword,
          tel: req.body.tel,
        },
      },
      { new: true }
    );
    res.send(operateur);
    console.log(operateur);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/get", async (req, res) => {
  const token = req.header("Authorization");
  const token_decode = await jwt.decode(token);
  console.log(token_decode);
  try {
    const getajoute = await Operateur.findById({
      _id: token_decode.Operateur.id,
    });
    res.send(getajoute);
  } catch (err) {
    res.json({ message: err });
  }
});

//update operateur
router.patch("/updat", async (req, res) => {
  const token = req.header("Authorization");
  const token_decode = await jwt.decode(token);
  console.log(token_decode);

  try {
    const oerateur = await Operateur.findOneAndUpdate(
      { _id: token_decode.Operateur.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          tel: req.body.tel,
        },
      },
      { new: true }
    );
    res.send(oerateur);
    console.log(oerateur);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
