// @mui icons
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images

const date = new Date().getFullYear();

export default {
  menus: [
    {
      name: "company",
      items: [
        { name: "Acceuil", href: "pages/Acceuil" },
        { name: "Radiologues", href: "/pages/Radiologues" },
        { name: "Spécialités", href: "/pages/Specialite" },
        { name: "Rendez vous", href: "/pages/RendezVous" },
        { name: "Se connecter", href: "/pages/authentication/sign-in" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="http://www.zimys.com/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Zimys
      </MKTypography>
      .
    </MKTypography>
  ),
};
