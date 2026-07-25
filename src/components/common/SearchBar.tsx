import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "Search threats...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          py-3
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          transition
          focus:border-red-500
        "
      />

    </div>
  );
}