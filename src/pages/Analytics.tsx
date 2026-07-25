import Layout from "../components/layout/Layout";
import {
  ThreatStats,
  AnalyticsTable,
} from "../components/analytics";

export default function Analytics() {
  return (
    <Layout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            Threat Analytics
          </h1>

          <p className="mt-2 text-slate-400">
            Analyze incidents and security trends across the infrastructure.
          </p>

        </div>

        <ThreatStats />

        <AnalyticsTable />

      </div>

    </Layout>
  );
}