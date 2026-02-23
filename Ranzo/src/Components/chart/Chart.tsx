import "./chart.scss"
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import weights from "../../data/weights.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const weightEntry = weights[0];
const labels = weightEntry?.labels.split(",").map((item) => item.trim()) ?? [];
const values = weightEntry?.values.split(",").map((item) => Number(item.trim()) || 0) ?? [];

const Chart = () => {
  return (
    <div className="chart">
      <h2 className="title">Weight Trend</h2>
      <div className="lineChart">
      <Line 
        data={{
          labels,
          datasets: [
            {
              label: "Weight Trend",
              data: values,
              borderColor: "#0e930c",
              backgroundColor: "rgba(14, 147, 12, 0.2)",
              borderWidth: 3,
              fill: true,
              tension: 0.35,
              pointRadius: 3,
              pointHoverRadius: 5,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
      </div>
    </div>
  )
}

export default Chart ;
