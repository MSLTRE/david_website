import Image from "next/image";

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/brand/LuibrandTileIcon.jpg"
        alt=""
        width={1940}
        height={2104}
        unoptimized
        className="h-10 w-auto rounded-sm"
      />
      <span className="text-lg font-black tracking-tight">Luibrand Tile</span>
    </span>
  );
}
