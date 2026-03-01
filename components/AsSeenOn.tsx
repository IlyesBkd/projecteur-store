const placeholderLogos = [
  { name: "TechRadar", letters: "TR" },
  { name: "Les Numériques", letters: "LN" },
  { name: "01net", letters: "01" },
  { name: "FrAndroid", letters: "FA" },
];

export function AsSeenOn() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400">
          Recommandé par&nbsp;:
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {placeholderLogos.map((logo) => (
            <span
              key={logo.name}
              className="text-2xl font-bold tracking-tight text-gray-300 transition hover:text-gray-400 sm:text-3xl"
              title={logo.name}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
