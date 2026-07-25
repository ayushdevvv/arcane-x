import Layout from "../components/layout/Layout";
import {
  KPICard,
  SeverityChart,
  ThreatTrendChart,
} from "../components/dashboard";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import { metrics } from "../data/metrics";
import { alerts } from "../data/alerts";
import {
  ShieldAlert,
  ArrowRight,
  Activity,
  FileWarning,
  ShieldCheck,
} from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Security Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Monitor threats, investigate alerts and track system health.
            </p>
          </div>

          <button className="rounded-xl bg-red-500 px-5 py-3 font-semibold transition hover:bg-red-600">
            Generate Report
          </button>

        </div>

        {/* KPI */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {metrics.map((metric) => (
            <KPICard
              key={metric.title}
              metric={metric}
            />
          ))}

        </div>

        {/* Charts */}

        <div className="grid gap-6 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <ThreatTrendChart />
          </div>

          <SeverityChart />

        </div>

        {/* Recent Alerts */}

        <Card>

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              Recent Threats
            </h2>

            <button className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300">
              View All
              <ArrowRight size={16} />
            </button>

          </div>

          <div className="space-y-4">

            {alerts.slice(0, 4).map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-lg bg-red-500/10 p-3">
                    <ShieldAlert className="text-red-400" />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {alert.title}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {alert.system}
                    </p>

                  </div>

                </div>

                <Badge severity={alert.severity} />

              </div>
            ))}

          </div>

        </Card>

        {/* Quick Actions */}

        <div className="grid gap-6 md:grid-cols-3">

          <Card className="cursor-pointer hover:border-red-500">

            <Activity className="mb-4 text-cyan-400" />

            <h3 className="font-semibold">
              Threat Scan
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Launch an on-demand security scan using simulated data.
            </p>

          </Card>

          <Card className="cursor-pointer hover:border-red-500">

            <FileWarning className="mb-4 text-yellow-400" />

            <h3 className="font-semibold">
              Incident Report
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Export the latest threat summary report.
            </p>

          </Card>

          <Card className="cursor-pointer hover:border-red-500">

            <ShieldCheck className="mb-4 text-emerald-400" />

            <h3 className="font-semibold">
              Security Health
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Review current infrastructure protection status.
            </p>

          </Card>

        </div>

      </div>
    </Layout>
  );
}