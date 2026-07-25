import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Alert, AlertCategory, Severity } from "@/types";
import { ALERTS, CATEGORIES, SEVERITIES, SYSTEMS } from "@/data/mockData";

interface AlertsContextValue {
  alerts: Alert[];
  latestId: string | null;
  isLive: boolean;
  toggleLive: () => void;
}

const AlertsContext = createContext<AlertsContextValue | null>(null);

const titlePool: Record<AlertCategory, string[]> = {
  Malware: ["New trojan variant intercepted", "Endpoint quarantined automatically"],
  Intrusion: ["Repeated failed login burst", "Anomalous internal port scan"],
  Phishing: ["Bulk phishing wave detected", "Cloned login page reported"],
  DDoS: ["Traffic spike on edge node", "Rate limit threshold breached"],
  "Data Exfiltration": ["Unusual export to external IP", "Encrypted archive upload flagged"],
  "Insider Threat": ["Access outside normal hours", "Sensitive repo cloned locally"],
  Misconfiguration: ["Storage bucket permissions changed", "Debug endpoint left open"],
};

function generateAlert(counter: number): Alert {
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const severity = SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)] as Severity;
  const system = SYSTEMS[Math.floor(Math.random() * SYSTEMS.length)];
  const pool = titlePool[category];
  const title = pool[Math.floor(Math.random() * pool.length)];

  return {
    id: `ALT-LIVE-${counter}`,
    title,
    description: `${title} originating from ${system.name}. Flagged by automated correlation engine for immediate triage.`,
    severity,
    category,
    source: ["Sensor-Net", "EDR Agent", "SIEM Correlator", "NetFlow", "Cloud Audit Log"][
      Math.floor(Math.random() * 5)
    ],
    system: system.name,
    status: "active",
    time: new Date().toISOString(),
  };
}

export function AlertsProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>(ALERTS);
  const [latestId, setLatestId] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(true);
  const counterRef = useRef(1);

  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      const next = generateAlert(counterRef.current++);
      setAlerts((prev) => [next, ...prev].slice(0, 200));
      setLatestId(next.id);
    }, 6000);
    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <AlertsContext.Provider value={{ alerts, latestId, isLive, toggleLive: () => setIsLive((v) => !v) }}>
      {children}
    </AlertsContext.Provider>
  );
}

export function useAlerts() {
  const ctx = useContext(AlertsContext);
  if (!ctx) throw new Error("useAlerts must be used within AlertsProvider");
  return ctx;
}