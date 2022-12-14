import moment from "moment";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Wrapper from "../assets/wrappers/AreaChartContainer";

function formatXAxis(tickItem) {
  // If using moment.js
  return moment(tickItem).format("HH:mm:ss");
}

const AreaChartComponent = ({ data, title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <ResponsiveContainer width={600} height={320} className={"chart-container"}>

        <AreaChart
          data={data}
          margin={{
            top: 50,
          }}
          className="chart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={formatXAxis} reversed={true}/>
          <YAxis allowDecimals={true} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#a9d1f8"
            fill="#a0c9f2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default AreaChartComponent;
