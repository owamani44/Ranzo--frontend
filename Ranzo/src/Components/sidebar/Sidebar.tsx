import "./sidebar.scss"
import GiteIcon from '@mui/icons-material/Gite';
import { GiCow } from "react-icons/gi";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ScaleIcon from '@mui/icons-material/Scale';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from '../../assets/ranzo.png';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">
                <img src={logo} alt="Ranzo Logo" />
            </span>
            </div>
            <hr />
        
        <div className="centre">
            <ul>
                
                <li>
                <NavLink to="/home" className="link">
                    <GiteIcon className="icon"/>
                    <span>Home</span>
                </NavLink>
                </li>
                
                <li>
                    <NavLink to="/animals" className="link">
                    <GiCow className="icon"/>
                    <span>Animals</span>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/medical-records" className="link">
                    <MedicalInformationIcon className="icon"/>
                    <span>Medical Records</span>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/weight-records" className="link">
                    <ScaleIcon className="icon"/>
                    <span>Weight Records</span>
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to="/profile" className="link">
                    <AccountBoxIcon className="icon"/>
                     <span>Profile</span>
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
            <div className="colourOption"></div>
            <div className="colourOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
