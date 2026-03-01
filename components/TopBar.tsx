"use client";

import { X } from "lucide-react";
import { useState } from "react";

export function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <div className="relative flex items-center justify-center py-2 text-center text-[0.9rem]">
          <p>Livraison offerte en France Métropolitaine (48/72h) 🚚</p>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="absolute right-0 inline-flex h-8 w-8 items-center justify-center text-white/70 transition hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Fermer le bandeau</span>
          </button>
        </div>
      </div>
    </div>
  );
}
