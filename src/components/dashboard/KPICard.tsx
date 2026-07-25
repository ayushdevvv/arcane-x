import Card from "../common/Card";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { Metric } from "../../types/threat";

interface Props {
  metric: Metric;
}

export default function KPICard({ metric }: Props) {
  return (
    <Card className="group hover:-translate-y-1 duration-300">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {metric.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {metric.value}
          </h2>
        </div>

        <div
          className={`rounded-xl p-2 ${
            metric.positive
              ? "bg-emerald-500/10"
              : "bg-red-500/10"
          }`}
        >
          {metric.positive ? (
            <TrendingUp className="text-emerald-400" />
          ) : (
            <TrendingDown className="text-red-400" />
          )}
        </div>

      </div>

      <p
        className={`mt-5 text-sm font-medium ${
          metric.positive
            ? "text-emerald-400"
            : "text-red-400"
        }`}
      >
        {metric.change}
      </p>

    </Card>
  );
}