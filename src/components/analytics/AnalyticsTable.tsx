import Card from "../common/Card";
import Badge from "../common/Badge";
import { alerts } from "../../data/alerts";

export default function AnalyticsTable() {
  return (
    <Card>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Threat Analysis
        </h2>

        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm hover:bg-slate-700">
          Export CSV
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800 text-left text-slate-400">

              <th className="pb-4">Threat</th>
              <th className="pb-4">Source</th>
              <th className="pb-4">System</th>
              <th className="pb-4">Severity</th>
              <th className="pb-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {alerts.map((alert) => (

              <tr
                key={alert.id}
                className="border-b border-slate-900 hover:bg-slate-900/50"
              >

                <td className="py-4 font-medium">
                  {alert.title}
                </td>

                <td>{alert.source}</td>

                <td>{alert.system}</td>

                <td>
                  <Badge severity={alert.severity} />
                </td>

                <td className="text-slate-300">
                  {alert.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}