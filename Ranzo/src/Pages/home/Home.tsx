import Sidebar from "../../Components/sidebar/Sidebar"
import "./home.scss"
import Navbar from "../../Components/navbar/Navbar"
import Widget from "../../Components/widget/Widget"
import Featured from "../../Components/featured/Featured"
import Chart from "../../Components/chart/Chart"
import Table from "../../Components/table/AnimalsTable"

function Home() {
  
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="Animals"/>
          <Widget type="SickCount"/>
          <Widget type="Average Weight"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Animal records
          </div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home
