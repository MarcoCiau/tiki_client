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

function formatXAxis(tickItem) {
  // If using moment.js
  return moment(tickItem).format("HH:mm:ss");
}

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tickFormatter={formatXAxis} />
        <YAxis allowDecimals={true} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#2cb1bc" fill="#bef8fd" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
