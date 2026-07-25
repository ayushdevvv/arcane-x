import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="mt-2 text-slate-400">
            Configure your ThreatWatch dashboard preferences.
          </p>
        </div>

        <Card>
          <h2 className="mb-6 text-xl font-semibold">
            Dashboard Settings
          </h2>

          <div className="space-y-4">

            <label className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between">
              <span>Auto Refresh</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" defaultChecked />
            </label>

          </div>
        </Card>

      </div>
    </Layout>
  );
}