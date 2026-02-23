import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Doughnut} from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import sourceData from "../../data/sourceData.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = sourceData.map((item) => item.label);
const values = sourceData.map((item) => Number(item.value) || 0);

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Ranch Stats</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <Doughnut
            data={{
              labels,
              datasets: [
                {
                  label: "Ranch Stats",
                  data: values,
                  backgroundColor: ["#0e930c", "#ef4444", "#4b4a46", "#efa331"],
                  borderColor: "#ffffff",
                  borderWidth: 2,
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              cutout: "80%",
              radius: "80%",
              plugins: {
                legend: { position: "right" },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Featured
