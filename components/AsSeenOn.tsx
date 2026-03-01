export function AsSeenOn() {
  const mediaLogos = [
    { name: "TechCrunch", width: "w-28" },
    { name: "Forbes", width: "w-24" },
    { name: "Wired", width: "w-20" },
    { name: "The Verge", width: "w-28" },
  ];

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
          Recommandé par :
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {mediaLogos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} flex h-10 items-center justify-center rounded-md bg-gray-100 px-4 text-sm font-bold text-gray-400`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
