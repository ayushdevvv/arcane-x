import { useMemo } from "react";
import AlertCard from "./AlertCard";
import type { Alert } from "../../types/threat";

interface AlertFeedProps {
  alerts: Alert[];
  search: string;
  severity: string;
}

export default function AlertFeed({
  alerts,
  search,
  severity,
}: AlertFeedProps) {
  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchesSearch =
        alert.title.toLowerCase().includes(search.toLowerCase()) ||
        alert.system.toLowerCase().includes(search.toLowerCase()) ||
        alert.source.toLowerCase().includes(search.toLowerCase());

      const matchesSeverity =
        severity === "all" || alert.severity === severity;

      return matchesSearch && matchesSeverity;
    });
  }, [alerts, search, severity]);

  if (filteredAlerts.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
        No alerts found.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {filteredAlerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
        />
      ))}
    </div>
  );
}