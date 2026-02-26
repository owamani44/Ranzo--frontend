import "./sidebar.scss"
import GiteIcon from '@mui/icons-material/Gite';
import { GiCow } from "react-icons/gi";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ScaleIcon from '@mui/icons-material/Scale';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from '../../assets/ranzo.png';
import { Link } from "react-router-dom";

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
                <Link to="/">
                    <li>
                    <GiteIcon className="icon"/>
                    <span>Home</span>
                </li>
                </Link>

                <Link to="/animals">
                <li>
                    <GiCow className="icon"/>
                    <span>Animals</span>
                </li>
                </Link>

                <Link to="/medical-records">
                <li>
                    <MedicalInformationIcon className="icon"/>
                    <span>Medical Records</span>
                </li>
                </Link>

                <Link to="/weight-records">
                <li>
                    <ScaleIcon className="icon"/>
                    <span>Weight Records</span>
                </li>
                </Link>
               
                <li>
                    <AccountBoxIcon className="icon"/>
                     <span>Profile</span>
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
