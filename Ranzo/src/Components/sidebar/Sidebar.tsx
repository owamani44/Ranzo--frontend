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
                
                <li>
                <Link to="/home" className="link">
                    <GiteIcon className="icon"/>
                    <span>Home</span>
                </Link>
                </li>
                
                <li>
                    <Link to="/animals" className="link">
                    <GiCow className="icon"/>
                    <span>Animals</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/medical-records" className="link">
                    <MedicalInformationIcon className="icon"/>
                    <span>Medical Records</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/weight-records" className="link">
                    <ScaleIcon className="icon"/>
                    <span>Weight Records</span>
                    </Link>
                </li>
               
                <li>
                    <Link to="/profile" className="link">
                    <AccountBoxIcon className="icon"/>
                     <span>Profile</span>
                    </Link>
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
