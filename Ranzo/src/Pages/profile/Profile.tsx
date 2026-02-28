import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./profile.scss"

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar/>
      <div className="container">
        <Navbar/>
      </div>
    </div>
  )
}

export default Profile
