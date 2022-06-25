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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";
import axios from "axios";


// Images
import bgImage from "assets/images/tt.jpg";

function Validation() {
  const [otp, setOtp] = useState("");
  const {token,id}=useParams()
  console.log(token)
  console.log(id)

  const Navigate = useNavigate();
  const handleChange = (e) => {
    setOtp({ ...otp, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  
   
    axios.put(`http://localhost:5000/Client/verif`, otp,{ headers: {"Authorization" : `${token}`} } )  .then((res) => {
        
          Navigate("/Login");
        

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };


  /// renvoyer 

  const handleResend = (e) => {
    e.preventDefault();

   console.log("envoyer");
   
    axios.post("http://localhost:5000/Client/renvoyer")
      .then((res) => {
        
           Navigate("/validation");
        

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <DefaultNavbar routes={routes} transparent light sticky />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.2)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2} onChange={handleChange}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Validate your account
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="password" name="otp" label="Insert OTP" fullWidth />
                  </MKBox>
                 
                  <MKBox mt={4} mb={1} onChange={handleChange}>
                    <MKButton onClick={handleSubmit}  variant="gradient" color="info" fullWidth>
                      Verify OTP
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                     {" "}
                      <MKButton
                        component="a"
                        
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                        onClick={handleSubmit}
                      >
                       Renvoyer OTP
                      </MKButton>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default Validation;
