import {
  Bell,
  Menu,
  Search,
  UserCircle
} from "lucide-react";

interface Props {
  setOpen: (v: boolean) => void;
}

export default function Topbar({ setOpen }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">

      <div className="flex h-16 items-center justify-between px-6">

        <div className="flex items-center gap-4">

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-slate-800 px-3 py-2 text-slate-400">
            <Search size={18} />
            Search Threats...
          </div>

        </div>

        <div className="flex items-center gap-4">

          <button className="rounded-lg p-2 hover:bg-slate-800">
            <Bell />
          </button>

          <UserCircle size={34} />

        </div>

      </div>

    </header>
  );
}