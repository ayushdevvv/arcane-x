import type { Alert } from "../types/threat";

export const alerts: Alert[] = [
  {
    id: 1,
    title: "Multiple Failed Login Attempts",
    severity: "critical",
    source: "Firewall",
    system: "Authentication Server",
    time: "2 min ago",
    status: "Open",
  },
  {
    id: 2,
    title: "SQL Injection Detected",
    severity: "high",
    source: "WAF",
    system: "API Gateway",
    time: "8 min ago",
    status: "Investigating",
  },
  {
    id: 3,
    title: "Suspicious Outbound Traffic",
    severity: "medium",
    source: "Network Monitor",
    system: "Database Cluster",
    time: "14 min ago",
    status: "Investigating",
  },
  {
    id: 4,
    title: "Malware Signature Blocked",
    severity: "low",
    source: "Endpoint Protection",
    system: "Employee Laptop",
    time: "21 min ago",
    status: "Resolved",
  },
];