import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Janeiro", Total: 221 },
  { name: "Fevereiro", Total: 1233 },
  { name: "Março", Total: 411 },
  { name: "Abril", Total: 1233 },
  { name: "Maio", Total: 331 },
  { name: "Junho", Total: 113 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Útimos seis meses</div>
      <ResponsiveContainer width="100%" height={100} aspect={2 / 0.8}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#69055d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#69055d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis color="#69023d" dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#69055d"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
