import Card from "../common/Card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Critical",
    value: 5,
  },
  {
    name: "High",
    value: 8,
  },
  {
    name: "Medium",
    value: 12,
  },
  {
    name: "Low",
    value: 18,
  },
];

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
];

export default function SeverityChart() {
  return (
    <Card>

      <h2 className="mb-6 text-xl font-semibold">
        Threat Severity
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}