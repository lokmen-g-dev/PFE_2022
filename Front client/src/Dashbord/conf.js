

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from "react-router-dom";
import PolicyIcon from '@mui/icons-material/Policy';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Update/cssx.css"
import Policy from './Policy';
import SDWAN from './SDWAN';
import Static from './Static';
import Interface from './Interface';
import { Button } from "@material-ui/core";




//import { DarkModeContext } from "../../context/darkModeContext";
function  Senn(){
  return (
    <div className="sideba" id="marf">
      <div className="top">
              <span className="logo">FortiGate</span>
        
      </div>
      <div className="center">
        <ul>
          
          <p className="title"></p>
         
          
          <li>
            <ArrowForwardIosIcon className="icon" />
            <Button><Interface style ={{ marginLeft:'1%', marginTop:'1%', marginBottom:'1%', marginRight:'2%'}} /></Button>
          </li>
          <li>
            <AltRouteIcon className="icon" />
            <Button><Static style ={{ marginLeft:'1%', marginTop:'1%', marginBottom:'1%', marginRight:'2%'}} /></Button>
          </li>
          

          <li>
            <PolicyIcon className="icon" />
            <Button><Policy style ={{ marginLeft:'1%', marginTop:'1%', marginBottom:'1%', marginRight:'2%'}} /></Button>
                     </li>
         
          <li>
            <AcUnitIcon className="icon" />
            <Button >
           <SDWAN style ={{ marginLeft:'1%', marginTop:'1%', marginBottom:'1%', marginRight:'2%'}}/>
        </Button>
          </li>
           
        </ul>
      </div>
      
    </div>
  );
};

export default Senn;
