import { ShieldAlert, Clock, Server } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";
import type { Alert } from "../../types/threat";

interface AlertCardProps {
  alert: Alert;
}

export default function AlertCard({ alert }: AlertCardProps) {
  return (
    <Card className="hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-4">

          <div className="rounded-xl bg-red-500/10 p-3">
            <ShieldAlert className="text-red-400" size={22} />
          </div>

          <div>

            <h3 className="font-semibold text-lg">
              {alert.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">

              <span className="flex items-center gap-1">
                <Server size={15} />
                {alert.system}
              </span>

              <span>
                {alert.source}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={15} />
                {alert.time}
              </span>

            </div>

          </div>

        </div>

        <Badge severity={alert.severity} />

      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">

        <span className="text-sm text-slate-400">
          Status
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            alert.status === "Resolved"
              ? "bg-green-500/15 text-green-400"
              : alert.status === "Investigating"
              ? "bg-yellow-500/15 text-yellow-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          {alert.status}
        </span>

      </div>

    </Card>
  );
}