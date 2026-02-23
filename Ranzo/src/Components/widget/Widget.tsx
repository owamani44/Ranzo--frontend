import "./widget.scss"
import type { ReactElement } from "react";
import { GiCow } from "react-icons/gi";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BarChartIcon from '@mui/icons-material/BarChart';

type WidgetType = "Animals" | "SickCount" | "Average Weight";

interface WidgetProps {
  type: WidgetType;
  count?: number;
}

interface WidgetData {
  title: string;
  icon: ReactElement;
}

const widgetData: Record<WidgetType, WidgetData> = {
  Animals: {
    title: "Total Animals",
    icon: <GiCow className="icon"  style={{color:"green",backgroundColor:"transparent"}}/>,
  },
  SickCount: {
    title: "Sick Animals",
    icon: <LocalHospitalIcon className="icon"  style={{color:"red",backgroundColor:"transparent"}}/>,
  },
  "Average Weight": {
    title: "Average Weight",
    icon: <BarChartIcon className="icon" style={{color:"blue",backgroundColor:"transparent"}}/>,
  },
};

const Widget = ({ type, count = 17 }: WidgetProps) => {
  const data = widgetData[type];
  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="count">{count}</span>
        </div>
        <div className="right">
          <div>{data.icon}</div>
        </div>
      
    </div>
  )
}

export default Widget
