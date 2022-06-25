const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const ajoute = require("../models/Fortigate.js") ;

sgMail.setApiKey(process.env.API_KEY);


router.post("/Add", async(req,res)=>{

    console.log("salut")

        const ajouter = await new ajoute({
        name:req.body.name,
        ip:req.body.ip,
        user:req.body.user,
        password:req.body.password
    })
   
    try{
        
        const savedajouter = await ajouter.save();
    //Add operateur
            res.send( savedajouter);
    }catch(err){
        res.send({message:err})
    }
 
        
    });
///get 

   //get

   router.get("/user",async(req,res)=>{
    try{
        const ajouter= await ajoute.find();
        res.send(ajouter);
    }catch(err){res.json({message:err})}
    })
    //delete
    router.delete("/ajouter/:id", async (req, res) => {
        try {
          const deleteajoute = await ajoute.findByIdAndDelete({
            _id: req.params.id,
          });
          console.log(deleteajoute);
          res.send("deleted");
        } catch (err) {
          res.json({ message: err });
        }
      });




    

 //Delet operateur
 

module.exports=router;