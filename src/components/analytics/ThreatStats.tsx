import Card from "../common/Card";
import {
  ShieldAlert,
  ShieldCheck,
  Activity,
  Server,
} from "lucide-react";

const stats = [
  {
    title: "Critical Threats",
    value: 5,
    color: "text-red-400",
    icon: ShieldAlert,
  },
  {
    title: "Resolved Incidents",
    value: 128,
    color: "text-emerald-400",
    icon: ShieldCheck,
  },
  {
    title: "Threat Score",
    value: "82%",
    color: "text-cyan-400",
    icon: Activity,
  },
  {
    title: "Protected Systems",
    value: 41,
    color: "text-yellow-400",
    icon: Server,
  },
];

export default function ThreatStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>

              </div>

              <div className="rounded-xl bg-slate-800 p-3">
                <Icon className={item.color} />
              </div>

            </div>
          </Card>
        );
      })}
    </div>
  );
}