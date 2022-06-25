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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Information from "pages/Acceuil/sections/Information";
// Presentation page components
import BuiltByDevelopers from "pages/Acceuil/components/BuiltByDevelopers";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/img.jpg";
import XImage from "assets/images/img.jpg";

function Acceuil() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky transparent light/>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              SD-WAN{" "}
            </MKTypography>
            <MKTypography
              variant="h5"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              BIENVENUE A NOTRE PLATFORME .
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 10,
          mx: { xs: 2, lg: 3 },
          mt: -6,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
      </Card>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${XImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKTypography variant="h2" color="white">
          PROFITEZ DE DE LA SOLUTION SD-WAN
        </MKTypography>
      </MKBox>
      <Card>
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container style={{ marginBottom: "35px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="FortiManager"
                description="Acceder a la platforme fortimanager pour voire plus "
                action={{
                  type: "external",
                  route: "https://www.fortinet.com/products/management/fortimanager",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="FortiGate"
                description="Acceder a la platforme fortiGate pour voire plus"
                action={{
                  type: "external",
                  route: "https://www.fortinet.com/fr/products/next-generation-firewall",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Solution SD-WAN"
                description="La transformation du WAN Edge à l’aide d’un réseau orienté sécurité."
                action={{
                  type: "external",
                  route: "https://www.fortinet.com/fr/products/sd-wan",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Card>
    </>
  );
}

export default Acceuil;
