
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

const AlertsContext = createContext<any>(null);

export function AlertsProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AlertsContext.Provider value={{}}>
      {children}
    </AlertsContext.Provider>
  );
}

export function useAlerts() {
  return useContext(AlertsContext);
}