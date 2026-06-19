export function ServiceAreaMap() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_28px_80px_rgb(31_25_18/0.12)]">
      <div className="relative h-[500px]">
        <iframe
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://serviceareamaps.com/map/60505d4b99ca?embed=1"
          title="Luibrand Tile 35-mile service area map"
        />
      </div>
      <div className="border-t border-border bg-background/92 px-5 py-4">
        <p className="text-sm font-semibold text-foreground">
          35-mile service radius centered on Round Rock.
        </p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Projects outside the radius can still be reviewed by scope, schedule,
          and drive time.
        </p>
      </div>
    </div>
  );
}
