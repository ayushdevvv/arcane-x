import { Shield, ArrowRight, Activity, BarChart3, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Live Threat Monitoring",
    icon: Activity,
  },
  {
    title: "Threat Analytics",
    icon: BarChart3,
  },
  {
    title: "Instant Alerts",
    icon: Bell,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10">
            <Shield className="text-red-400" size={40} />
          </div>

          <h1 className="text-6xl font-black">
            ThreatWatch Console
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Modern Security Operations dashboard for monitoring cyber threats,
            analytics and infrastructure health.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold hover:bg-red-600"
            >
              Launch Dashboard
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-red-500/30"
              >
                <Icon className="mb-5 text-red-400" size={34} />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Built for fast monitoring and investigation using a clean,
                  modern interface.
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}