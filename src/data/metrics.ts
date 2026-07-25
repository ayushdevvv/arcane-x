import type { Metric } from "../types/threat";

export const metrics: Metric[] = [
  {
    title: "Active Threats",
    value: "18",
    change: "+12%",
    positive: false,
  },
  {
    title: "Blocked IPs",
    value: "124",
    change: "+8%",
    positive: true,
  },
  {
    title: "Critical Alerts",
    value: "05",
    change: "+2",
    positive: false,
  },
  {
    title: "Systems Online",
    value: "99.8%",
    change: "+0.4%",
    positive: true,
  },
];