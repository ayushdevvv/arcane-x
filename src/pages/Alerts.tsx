import { useState } from "react";
import Layout from "../components/layout/Layout";
import { AlertFeed, AlertFilters } from "../components/alerts";
import { alerts } from "../data/alerts";

export default function Alerts() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("all");

  return (
    <Layout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            Live Threat Feed
          </h1>

          <p className="mt-2 text-slate-400">
            Monitor and investigate security incidents in real time.
          </p>
        </div>

        <AlertFilters
          search={search}
          setSearch={setSearch}
          severity={severity}
          setSeverity={setSeverity}
        />

        <AlertFeed
          alerts={alerts}
          search={search}
          severity={severity}
        />

      </div>
    </Layout>
  );
}