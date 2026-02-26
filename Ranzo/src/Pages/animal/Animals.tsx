import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Table from "../../Components/table/AnimalsTable"
import './Animals.scss'


function Animals() {
  return (
    <div className="animals">
      <div className="sideBar">
        <Sidebar/>
        </div>
    
      <div className="container">
        <Navbar/>
       <div className="table">
        <Table/>
       </div>
      </div>
      
    </div>
  )
}

export default Animals
