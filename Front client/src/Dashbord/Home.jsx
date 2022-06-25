import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import "./home.scss";
import Widget from "./Widget";
import Chart from "./Chart";
import Featured from "./Featured";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Home = () => {
const params = useParams()
  console.log(params)
  //nb alert
 const [datale,setDataLe]=useState()
  

    //nb userss
    
    const [datalen,setDataLen]=useState()
    const [datal,setDataL]=useState();
    useEffect(async () => {
      //alert liset nb
      axios.get("http://localhost:5000/Client/static").then((res) => {
     
        setDataLe(res.data.length)
        console.log(res.data.length)
       
      })
      // client list nb
      
      const token= await localStorage.getItem("access_token")
      console.log(token)
      axios.get("http://localhost:5000/Client/fortigate01").then((res) => {
     
       setDataLen(res.data.length)
        console.log(res.data.length)
       
      });
      //liste en attent
      const token1= await localStorage.getItem("access_token")

      axios.get("http://localhost:5000/Client/policy").then((res) => {
     
        setDataL(res.data.length)
        console.log(res.data.length)
      })

      
     
    }, [])
  

    
  

  console.log(datalen)
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <NavBar />
      <div className="widgets" > 
        <Widget title="FortiGate" len={datalen} />
        <Widget title="Router Static" len={datale} />
        <Widget title="Policy" len={datal} />


      </div>
      <div className="charts">
        <Featured />
        <Chart style={{margin:"10%"}} title="" aspect={2 / 1} />
      </div>

      <div className="listContainer">

      </div>
    </div>
  </div>
  
  );
};

export default Home;