type WaveDividerProps = {
  flip?: boolean;
};

export function WaveDivider({ flip = false }: WaveDividerProps) {
  return (
    <div className={`${flip ? "rotate-180" : ""} -mb-px leading-none text-[#05070f]`}>
      <svg
        viewBox="0 0 1440 160"
        className="block h-10 w-full sm:h-12 lg:h-16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,149.3C672,139,768,117,864,90.7C960,64,1056,32,1152,21.3C1248,11,1344,21,1392,26.7L1440,32L1440,160L0,160Z"
        />
      </svg>
    </div>
  );
}
