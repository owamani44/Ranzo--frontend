import "./sidebar.scss"
import GiteIcon from '@mui/icons-material/Gite';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ScaleIcon from '@mui/icons-material/Scale';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
  return (
    < div className="sidebar">
        <div className="top">
            <span className="logo">Ranzo</span>
            </div>
            <hr />
        <div className="centre">
            <ul>
                <li>
                    <GiteIcon className="icon"/>
                    <span>Home</span>
                </li>
                <li>
                    <BedroomBabyIcon className="icon"/>
                    <span>Animals</span>
                </li>
                <li>
                    <MedicalInformationIcon className="icon"/>
                    <span>Medical Records</span>
                </li>
                <li>
                    <ScaleIcon className="icon"/>
                    <span>Weight Records</span>
                </li>
                <li>
                    <AccountBoxIcon className="icon"/>
                     <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">colour options</div>
    </div>
  )
}

export default Sidebar
