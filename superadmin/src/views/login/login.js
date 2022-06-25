import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import './login.css'
import { useHistory } from "react-router-dom";
import { style } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const [admin, setadmin] = useState("");
const [error,seterror]= useState("")
  const History = useHistory();
  const handleChange = (e) => {
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    axios
      .post("http://localhost:5000/admin/login", admin)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          console.log(res.data);
          console.log(res.data.token);
        if (localStorage.getItem("access_token")) {
          History.push("/superadmin/dashboard");
        }

        //  window.location.href = "/overview";
      })
      .catch((err) => {
      seterror(err)
      });

  };
  console.log(error);


  const classes = useStyles();

  return (
<div id="body">
    <Container style={{backgroundColor:"transparent" , paddingTop:"15%", paddingBottom :"8%",marginLeft:"10%" }} component="main" maxWidth="xs">
      <CssBaseline />
      <Card  
       style={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
            >
      <div id="center"  style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "5px",
                marginBottom: "10px",
              }}>
      
        <div className={classes.paper} >
        <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
            <LockOutlinedIcon />
          </Avatar> Connexion
          <div id="padd">
            <form className={classes.form}  onChange={handleChange}>
              
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
           
            id="email"
            label="Email "
            name="email"
            autoComplete="email"
            autoFocus
           />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            />

           <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
           >
            Se connecter
           </Button>
           </form>
        
           </div>
        </div>  
      </div> 
      </Card>
    </Container>
    </div>
  );
}