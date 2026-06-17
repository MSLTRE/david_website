import Image from "next/image";

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        alt=""
        aria-hidden="true"
        className="size-10 rounded-md shadow-[0_12px_24px_rgb(31_25_18/0.18)] ring-1 ring-white/50"
        height={40}
        src="/brand/luibrand-tile-mark.svg"
        width={40}
      />
      <span className="text-lg font-semibold tracking-normal">Luibrand Tile</span>
    </span>
  );
}
