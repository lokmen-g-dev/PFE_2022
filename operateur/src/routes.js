/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import TableList from "views/useraccetpt.js";
import dashboard from "views/dashboard.js";
import Table from "views/userattent.js";
import profil from "views/profil.js";
import Reclamation from "views/reclamation.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: dashboard,
    layout: "/operateur",
  },
  {
    path: "/ListAttent",
    name: "Utilisateur en Attent",
    icon: "nc-icon nc-notes",
    component: Table,
    layout: "/operateur",
  },
  {
    path: "/Liste",
    name: "Utilisateur Accepté",
    icon: "nc-icon nc-badge",
    component: TableList,
    layout: "/operateur",
  },
  {
    path: "/Reclamation",
    name: "Réclamation",
    icon: "nc-icon nc-tv-2",
    component: Reclamation,
    layout: "/operateur",
  },
  {
    path: "/Profile",
    name: "Profile",
    icon: "nc-icon nc-circle-09",
    component: profil,
    layout: "/operateur",
  },
];

export default dashboardRoutes;
