type SectionWatermarkProps = {
  text: string;
  className?: string;
};

export default function SectionWatermark({
  text,
  className = "",
}: SectionWatermarkProps) {
  return (
    <div
      className={[
        "pointer-events-none select-none absolute",
        "-top-8 left-1/2 -translate-x-1/2",
        className,
      ].join(" ")}
    >
      <span
        className="
          block whitespace-nowrap leading-none
          font-extrabold tracking-widest
          text-gray-900/5
          text-[56px]
          sm:text-[72px]
          md:text-[100px]
          lg:text-[140px]
          xl:text-[160px]
        "
        style={{
          WebkitTextStroke: "1px rgba(0,0,0,0.04)",
        }}
      >
        {text}
      </span>
    </div>
  );
}
