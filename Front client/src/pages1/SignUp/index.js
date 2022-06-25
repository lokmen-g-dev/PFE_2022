/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import FormControl from "@mui/material/FormControl";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// Material Kit 2 React page layout routes
import routes from "routes";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
// Images
import bgImage from "assets/images/tt.jpg";
import { useNavigate } from "react-router-dom";

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

function SignUpBasic() {
  const [admin, setadmin] = useState("");
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setadmin({ ...admin, [e.target.name]: e.target.value });
    console.log(admin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");

    axios
      .post("http://localhost:5000/Client/signin", admin)
      .then((res) => {
        console.log(res.data);
        Navigate(`/validation/${res.data.token}/${res.data.id}`);

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [operateur, Setoperateur] = useState([]);

  //const handleChange = (event) => {
  //  Setoperateur(event.target.value);
  // };

  useEffect(() => {
    axios.get("http://localhost:5000/operateur/overview").then((res) => {
      Setoperateur(res.data);
    });
    console.log(operateur);
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} transparent light sticky />
      <MKBox
        position=" fixed"
        top={0}
        left={0}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox
        left="-20%"
        width="100%"
        height="100vh"
        position="relative"
        zIndex={3}
        onChange={handleChange}
      >
        <Grid
          container
          justifyContent="center"
          width="100%"
          alignItems="center"
          height="100%"
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={0}
                p={3}
                mb={1}
                textAlign="center"
              >
                <MKTypography
                  variant="h4"
                  fontWeight="medium"
                  color="white"
                  margin-top="600 px"
                >
                  S'inscrire
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={20}>
                      <MKInput
                        variant="standard"
                        label="Nom"
                        id="name"
                        name="name"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={20}>
                      <MKInput
                        variant="standard"
                        label="Email"
                        name="email"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label="Mot de passe"
                        type="password"
                        name="password"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        variant="standard"
                        label=" confirmation Mot de passe"
                        type="password"
                        name="conf_pass"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={20}>
                      <MKInput
                        variant="standard"
                        label="tel"
                        name="tel"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>{" "}
                    <Grid item xs={50} md={90} name="operateur">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Operateur
                        </InputLabel>

                        <Select
                          input={<BootstrapInput />}
                          labelId="demo-simple-select-label"
                          label="Operateur"
                          name="operateur"
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
                    <Grid container item justifyContent="center">
                      <MKButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        onClick={handleSubmit}
                      >
                        S'inscrire
                      </MKButton>
                    </Grid>
                  </Grid>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignUpBasic;
