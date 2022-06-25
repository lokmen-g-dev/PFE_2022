/*
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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// Material Kit 2 React components
// Images

function Information() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid container item xs={11} spacing={20} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
            <MKTypography variant="body3" color="text">
            Le SD WAN permet de centraliser le déploiement de la solution, de ses applications,
             des fonctions de sécurité et le routage des flux à partir d’une seule console d’administration. 
            Celle-ci offre la possibilité de surveiller en temps réel l’état du réseau. 
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
