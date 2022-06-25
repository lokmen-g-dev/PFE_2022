
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";
import React, { useState } from 'react';


const theme = createTheme();

export default function Updat() {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log("submitted");
      axios
      .post("http://localhost:5000/ajouter/Add", formData)
        .then((res) => {
          console.log(res.data)
          window.location.reload(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };





  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddCircleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
          Add FortiGate
          </Typography>
          <Box component="form" noValidate onChange={handleChange} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="ip"
                  required
                  fullWidth
                  label="IP address"
                  autoFocus
                />
              </Grid>
         
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                
                  label="User Name"
                  name="user"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  
                 
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
             Add 
            </Button>
     
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}