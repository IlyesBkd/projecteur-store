import { Check, X } from "lucide-react";

import { BRAND, PRODUCT_PRICE } from "@/lib/constants";

type Row = {
  criteria: string;
  nexgear: string | boolean;
  traditional: string | boolean;
};

const rows: Row[] = [
  { criteria: "Luminosité", nexgear: "800 ANSI Lumens", traditional: "200–400 ANSI" },
  { criteria: "Résolution native", nexgear: "4K (3840×2160)", traditional: "1080p ou 720p" },
  { criteria: "Auto‑Keystone", nexgear: true, traditional: false },
  { criteria: "Android intégré", nexgear: true, traditional: false },
  { criteria: "Prix", nexgear: PRODUCT_PRICE, traditional: "250–600€" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-emerald-400" aria-label="Oui" />
    ) : (
      <X className="mx-auto h-5 w-5 text-red-400" aria-label="Non" />
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="bg-[#0b1220] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[920px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-heading text-3xl font-semibold text-white sm:text-4xl">
          {BRAND} vs Concurrence
        </h2>

        {/* Desktop table */}
        <div className="mt-8 hidden overflow-hidden rounded-xl border border-white/10 sm:block">
          <table className="w-full text-sm text-white">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-5 py-3.5 text-left font-semibold text-gray-300">Critère</th>
                <th className="px-5 py-3.5 text-center font-semibold text-emerald-400">
                  {BRAND}
                </th>
                <th className="px-5 py-3.5 text-center font-semibold text-gray-400">
                  Projecteurs traditionnels
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.criteria}
                  className={i < rows.length - 1 ? "border-b border-white/5" : ""}
                >
                  <td className="px-5 py-3.5 font-medium text-gray-200">{row.criteria}</td>
                  <td className="px-5 py-3.5 text-center">
                    <CellValue value={row.nexgear} />
                  </td>
                  <td className="px-5 py-3.5 text-center text-gray-400">
                    <CellValue value={row.traditional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-8 space-y-4 sm:hidden">
          {rows.map((row) => (
            <div
              key={row.criteria}
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <p className="mb-3 text-sm font-semibold text-gray-300">{row.criteria}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                    {BRAND}
                  </p>
                  <div className="text-white">
                    <CellValue value={row.nexgear} />
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-gray-500">
                    Traditionnel
                  </p>
                  <div className="text-gray-400">
                    <CellValue value={row.traditional} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
