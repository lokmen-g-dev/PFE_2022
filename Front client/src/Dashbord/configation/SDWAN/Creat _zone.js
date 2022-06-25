import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";



import InputLabel from "@mui/material/InputLabel";


import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 600,
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
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));

export default function AddButton() {

    const [operateur, Setoperateur] = useState([]);

  //const handleChange = (event) => {
  //  Setoperateur(event.target.value);
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/Client/interface").then((res) => {
      Setoperateur(res.data);
    });
    console.log(operateur);
  }, []);
  const [formData, setFormData] = useState([]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    const token = localStorage.getItem("access_token");
    axios
      .post("http://localhost:5000/Client/zone",formData,{ headers: { Authorization: token }})
      .then((res) => {
       
        console.log(res.data);
        console.log("ahahahahahahah");

        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" style={{color:"blue"}}  onClick={handleOpen}>
        Ajouter sdwan{" "}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            borderRadius: "10px",
            borderColor: "white",
            height: "700px",
          }}
          sx={style}
        >
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Ajouter
            </Typography>
            <form className={classes.form} onChange={handleChange}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="nom"
                name="nom"
                autoFocus
              />
<Grid item xs={50} md={90} name="operateur">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Interface
                        </InputLabel>

                        <Select
                          input={<BootstrapInput />}
                          labelId="demo-simple-select-label"
                          label="interface"
                          name="interface"
                          onChange={handleChange}
                        >
                          {operateur.map((e, index = 0) => {
                            return (
                              <MenuItem
                                name="lala"
                                key={index + 1}
                                value={e.name}
                              >
                                {e.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>

               
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{color:"white"}}
                className={classes.submit}
                onClick={(e)=>{handleSubmit(e)}}
              >
                Ajouter
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
