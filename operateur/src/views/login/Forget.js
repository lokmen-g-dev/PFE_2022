import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import  { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import Container from "@material-ui/core/Container";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";

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
const theme = createTheme();
export default function Forgot() {
  const [operateur, setoperateur] = useState("");

  const History = useHistory();
  const handleChange = (e) => {
    setoperateur({ ...operateur, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("submitted");
    axios
      .post("http://localhost:5000/operateur/forget", operateur)
      .then((res) => {      
        
          History.push(`/code`);
        

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const classes = useStyles();

  return (
    <div id="body">
    <Container style={{backgroundColor:"transparent" , paddingTop:"15%", paddingBottom :"8%",marginLeft:"10%" }} component="main" maxWidth="xs">
      <CssBaseline />
      <Card  
       style={{
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom:"21%"
      }}
            >
      <div id="center"  style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "5px",
                marginBottom: "50px",
              }}>
      
        <div className={classes.paper} >
        <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
            <LockOutlinedIcon />
          </Avatar> Mot de passe oublié
          <div id="padd">
            <form className={classes.form}  onSubmit={handleSubmit}>
              
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
            onChange={handleChange}
           />
           <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          
           >
            <Link href="/code" >
                Envoyer
              
                </Link>
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






