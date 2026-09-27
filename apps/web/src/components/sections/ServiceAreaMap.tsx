export function ServiceAreaMap() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_28px_80px_rgb(31_25_18/0.12)]">
      <div className="relative h-[500px]">
        <iframe
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://serviceareamaps.com/map/60505d4b99ca?embed=1"
          title="Luibrand Tile service area, about 35 miles from Round Rock"
        />
      </div>
    </div>
  );
}
