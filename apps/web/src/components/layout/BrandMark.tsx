import Image from "next/image";

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/brand/luibrand-tile-icon.svg"
        alt=""
        width={42}
        height={42}
        priority
        className="size-10 rounded-lg"
      />
      <span className="text-lg font-black tracking-tight">Luibrand Tile</span>
    </span>
  );
}
