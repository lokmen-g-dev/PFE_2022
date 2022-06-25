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

const theme = createTheme();
export default function News() {
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
      
        
          History.push(`/login`);
        

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.endtoend.com/wp-content/uploads/2018/01/SD-WAN-Diluted-photo-782x439.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: '',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
          onChange={handleChange}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             Modifier Mot de passe
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
               
                label="Mot de passe"
                name="password"
                autoFocus
              />

            <TextField
                margin="normal"
                fullWidth
                type="password"
                label="confirmer mot de passe"
                
                autoComplete="email"
                autoFocus
              />
         
              
              <Button
              
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                <Link href="/" style={{ textDecoration: "none", color:"white"}}>
                Envoyer
              
                </Link> </Button>
              
             
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}






