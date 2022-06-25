//import Home from "./pages/home/Home";

import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
//import { DarkModeContext } from "./context/darkModeContext";
import dashboard from "../assets/images/dashboard2.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="wrapper">
          <div className="wrapper">
            <div className="items">
              <div className="item">
                <img
                  src={dashboard}
                  width="10%"
                  height="9%"
                  style={{ marginRight: "10px" }}
                />{" "}
                Dashboard
              </div>
            </div>
          </div>
          <Link to="/" style={{ textDecoration: "nano" }}>
            <span style={{fontSize:"18px"}}>Déconnexion</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
