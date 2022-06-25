import "./widget.scss";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import RouterIcon from '@mui/icons-material/Router';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const Widget = (props) => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
        <span className="counter">
           {props.len}
        </span>
      </div>
    </div>
  );
};

export default Widget;
