import { Check, X } from "lucide-react";

const comparisonData = [
  {
    criterion: "Luminosité",
    nexgear: "800 ANSI Lumens",
    traditional: "300-500 ANSI Lumens",
    nexgearWins: true,
  },
  {
    criterion: "Résolution native",
    nexgear: "4K (3840×2160)",
    traditional: "1080p (1920×1080)",
    nexgearWins: true,
  },
  {
    criterion: "Auto-Keystone",
    nexgear: "Oui, automatique",
    traditional: "Manuel ou absent",
    nexgearWins: true,
  },
  {
    criterion: "Android intégré",
    nexgear: "Oui, avec apps",
    traditional: "Non",
    nexgearWins: true,
  },
  {
    criterion: "Prix",
    nexgear: "169,90€",
    traditional: "300-600€",
    nexgearWins: true,
  },
];

export function ComparisonTable() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-heading text-3xl font-semibold text-zinc-900 sm:text-4xl">
          NEXGEAR vs Projecteurs traditionnels
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-gray-600">
          Découvrez pourquoi le NEXGEAR surpasse les projecteurs classiques sur tous les critères clés.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Critère
                  </th>
                  <th className="bg-emerald-50 px-6 py-4 text-center text-sm font-semibold text-emerald-900">
                    NEXGEAR
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Projecteurs traditionnels
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {comparisonData.map((row, index) => (
                  <tr key={row.criterion} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.criterion}
                    </td>
                    <td className="bg-emerald-50/50 px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                        <span className="text-sm font-semibold text-gray-900">{row.nexgear}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <X className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm text-gray-600">{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden">
            {comparisonData.map((row) => (
              <div key={row.criterion} className="border-b border-gray-200 bg-white p-5 last:border-b-0">
                <h3 className="text-base font-semibold text-gray-900">{row.criterion}</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2 rounded-lg bg-emerald-50 p-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-emerald-900">NEXGEAR</p>
                      <p className="mt-1 text-sm font-semibold text-gray-900">{row.nexgear}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-gray-700">Projecteurs traditionnels</p>
                      <p className="mt-1 text-sm text-gray-600">{row.traditional}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
