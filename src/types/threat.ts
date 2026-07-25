export type Severity = "critical" | "high" | "medium" | "low";

export interface Alert {
  id: number;
  title: string;
  severity: Severity;
  source: string;
  system: string;
  time: string;
  status: "Open" | "Investigating" | "Resolved";
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  positive: boolean;
}