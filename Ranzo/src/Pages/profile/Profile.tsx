import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./profile.scss"

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar/>
      <div className="navContainer">
        <Navbar/>
      </div>
      <div className="container">
       
      </div>
    </div>
  )
}

export default Profile
