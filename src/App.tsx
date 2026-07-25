import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/alerts" element={<Alerts />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}