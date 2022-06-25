const express = require("express");
const bcrypt= require("bcryptjs")
const router = express.Router();
const Admin = require("../models/admin_model");
const jwt=require("jsonwebtoken");


//////VALIDATION/////
const Joi = require("@hapi/joi");

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});
 if (loginschema == false){
  document.write()
 }



router.post("/signin", async (req, res) => {

  const salt=await bcrypt.genSalt(10);
  const hashedpassword=await bcrypt.hash(req.body.password,salt);
  const admin = new Admin({
    email: req.body.email,
    password: hashedpassword,
  });
  try{
    const savedAdmin = await admin.save();
    res.send(savedAdmin)
  }catch(err){
    res.json({message:err})
  }
});

router.post("/login",async(req,res)=>{

  /////VALIDATE INCOMING ADMIN DATA
  const { error } = loginschema.validate(req.body); ///validate all the incoming data in the body
  if (error) return res.status(403).send(error.details[0].message);


  try{
    const admin= await Admin.findOne({email:req.body.email})
    if (!admin) return res.status(403).send("Account doesn't exists");

   
    const validpassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    //console.log(validpassword);
    if (!validpassword) return res.status(400).send("password is incorrect");
    const access_token = jwt.sign(
      { Admin: admin._id },
      process.env.ACCESS_TOKEN
    );
    res.send(access_token)
  } catch(err){
    res.send({message:err}) 
  }
})

module.exports = router;
