import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-1 flex-col">

        <Topbar setOpen={setOpen} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>
    </div>
  );
}