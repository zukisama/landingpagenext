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
        "pointer-events-none select-none absolute w-full flex justify-center",
        "top-10 left-0", // Sesuaikan jarak atas di sini
        className,
      ].join(" ")}
    >
      <span
        className="block whitespace-nowrap leading-none font-extrabold tracking-[0.2em] text-gray-900/5 uppercase"
        style={{
          /* Batas bawah: 60px (mobile)
             Ukuran ideal: 15vw (lebar layar)
             Batas atas: 160px (desktop besar)
          */
          fontSize: "clamp(40px, 10vw, 100px)",
          WebkitTextStroke: "1px rgba(0,0,0,0.02)", // Opsional: garis tepi tipis
        }}
      >
        {text}
      </span>
    </div>
  );
}