import Card from "../common/Card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", threats: 8 },
  { day: "Tue", threats: 14 },
  { day: "Wed", threats: 11 },
  { day: "Thu", threats: 18 },
  { day: "Fri", threats: 16 },
  { day: "Sat", threats: 21 },
  { day: "Sun", threats: 13 },
];

export default function ThreatTrendChart() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Threat Trend
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="threatFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="day" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="threats"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#threatFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}