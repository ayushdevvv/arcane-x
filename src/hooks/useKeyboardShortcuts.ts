import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ShortcutOptions {
  onOpenPalette: () => void;
  onEscape: () => void;
}

const NAV_KEYS: Record<string, string> = {
  "1": "/",
  "2": "/alerts",
  "3": "/analytics",
  "4": "/settings",
};

export function useKeyboardShortcuts({ onOpenPalette, onEscape }: ShortcutOptions) {
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping = ["INPUT", "TEXTAREA"].includes(target?.tagName ?? "");

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenPalette();
        return;
      }

      if (e.key === "Escape") {
        onEscape();
        return;
      }

      if (!isTyping && NAV_KEYS[e.key]) {
        e.preventDefault();
        navigate(NAV_KEYS[e.key]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, onOpenPalette, onEscape]);
}