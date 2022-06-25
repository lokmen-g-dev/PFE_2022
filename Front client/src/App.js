import { useEffect } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Material Kit 2 React themes
import theme from "assets/theme";
import Acceuil from "layouts/pages/Acceuil";
// Material Kit 2 React routes
import routes from "routes";
/// import interface 
import Attente from "Dashbord/Attendre";

import Home from "./Dashbord/Home";
import SignInBasic from "pages/SignIn";
import List from "./Dashbord/List";
import Policy from "./Dashbord/Policy"
import List_FG from "Dashbord/Liste_Fortigate";
//import Single from "./pages/single/Single";
import Single from "./Dashbord/Single";
import Validation from"./pages/SignUp/Validation";
//import New from "./pages/new/New";
import Add from "Dashbord/Add/Add";
import New from "./Dashbord/New";
import Interface from "Dashbord/Interface";
import Datainterface from "Dashbord/configation/interface/interface";
import { productInputs, userInputs } from "./formSource";
import Set from "Dashbord/Update/alert"
import Mise from "Dashbord/profile/Update";

import Log from "Dashbord/Update/Log";
import Info from "Dashbord/Update/Info";
import Oublier from "pages/SignIn/Oublier";
import Code from "pages/SignIn/Code";
import DataPolicy from "Dashbord/configation/Policy/policy";

import Sdwan from "Dashbord/configation/SDWAN/sd"
import Staticc from "Dashbord/configation/static/static";

import Changer from "pages/SignIn/Changer"
export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route exact path="/Acceuil" element={<Acceuil />} />
        <Route path="*" element={<Navigate to="/Acceuil" />} />

          <Route path="/Acceuil" element={<Acceuil />} />     
            <Route path="/Home/:id" element={<Home />} />
            <Route path="/oublier" element={<Oublier />} />
            <Route path="/info" element={<Info />} />
            <Route path="/log" element={<Log />} />
            <Route path="/code" element={<Code />} />
            <Route path="/attente" element={<Attente />} />
            <Route exact path="/reset-password/:clientId/:token" element={<Changer />} />
            <Route path="/interface" element={<Datainterface />} />
            <Route path="/poliicy" element={<DataPolicy />} />
            <Route path="/sdwan" element={<Sdwan/>} />
            <Route path="/static" element={<Staticc/>} />
            
            <Route path="/validation/:token/:id" element={<Validation />} />
            <Route path="/Update" element={<Mise />} />
            <Route path="/Policy" element={<Policy />} />
            <Route path="/listefg" element={<List_FG />} />
            <Route path="/set" element={<Set />} />

            <Route path="/Add" element={<Add />} />
            <Route path="/Login" element={<SignInBasic />} />
            
            <Route path="users">
              <Route index element={<List />} />
              
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
             <Route path="*" element={<Navigate to="/Acceuil" />} /> 
            </Route>
         
           
      </Routes>
    </ThemeProvider>
  );
}
