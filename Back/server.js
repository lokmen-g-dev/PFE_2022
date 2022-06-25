const express = require("express");
const app = express();
const mongoose = require("mongoose");

const http = require("http");
const cors = require("cors");

require("dotenv/config");

const { Server } = require("socket.io");
const server = http.createServer(app)



app.use(cors());
app.use(express.json());


const io = new Server(server,{
  cors:{
      origin1:"http://localhost:3002",
      origin2:"http://localhost:3001",
    
  }
});


const AdminRoute = require("./routes/admin_route");
const ajouterRoute = require("./routes/Client");
const OperateuRoute = require("./routes/operateur_login_route");
const AjouterRoute = require("./routes/Ajouter")
const AlertRoute = require("./routes/Alert")
const FindRoute = require("./routes/Find")


app.use('/admin',AdminRoute);
app.use('/operateur',OperateuRoute);
app.use('/find', FindRoute);


io.on('connection', (socket) => {
  console.log(`a user is connected ${socket.id}`);
  socket.on("disconnect",()=>{
      console.log("someone disconnected")
  })

  socket.on("reclamation",(data)=>{
      console.log(data.message)
      io.emit("recieve_msg",data)
  })
});


app.use('/Client',ajouterRoute);
app.use('/ajouter',AjouterRoute );
app.use('/alert',AlertRoute)


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to MongoDB");
    }
  );
  

  app.listen(5000, () => {  
    console.log("server is up and connect")});
 