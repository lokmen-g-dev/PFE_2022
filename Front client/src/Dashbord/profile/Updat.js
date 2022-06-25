import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft:"5%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function DataGridDemo() {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async () => {
    const token = await localStorage.getItem("access_token");
    console.log(token);
    axios
      .patch("http://localhost:5000/Client/updat", formData, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //get
  const [operateur, Setoperateur] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    axios
      .get(`http://localhost:5000/Client/profile`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        Setoperateur(res.data);
      });
    console.log(operateur);
  }, []);
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">Profil</Typography>

          <form className={classes.form} onChange={handleChange}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={operateur.name}
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              label={operateur.email}
              name="ip"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth="Tel "
              label={operateur.tel}
              name="user"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              label="password"
              type="password"
              name="password"
              autoFocus
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{color:"white"}}
              className={classes.submit}
              onClick={handleSubmit}
            >
              Modifier
            </Button>
          </form>
        </div>
      </div>{" "}
    </>
  );
}
