import {
  Shield,
  LayoutDashboard,
  TriangleAlert,
  BarChart3,
  Settings,
  X
} from "lucide-react";

import { NavLink } from "react-router-dom";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Alerts",
    path: "/alerts",
    icon: TriangleAlert,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({ open, setOpen }: Props) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed md:static z-50 h-screen w-72 bg-slate-900 border-r border-slate-800 transition-all ${
          open ? "left-0" : "-left-72 md:left-0"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-800">

          <div className="flex items-center gap-3">
            <Shield className="text-red-500" />
            <span className="font-bold text-lg">
              ThreatWatch
            </span>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>

        </div>

        <nav className="mt-8 space-y-2 px-4">

          {navItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-red-500 text-white"
                      : "hover:bg-slate-800 text-slate-300"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>
      </aside>
    </>
  );
}