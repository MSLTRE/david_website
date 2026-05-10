"use client";

import dynamic from "next/dynamic";

const DynamicServiceAreaMap = dynamic(
  () =>
    import("@/components/sections/ServiceAreaMap").then(
      (mod) => mod.ServiceAreaMap
    ),
  {
    loading: () => (
      <div className="flex h-[420px] items-center justify-center rounded-lg border border-border bg-secondary text-sm font-bold text-muted-foreground shadow-[0_20px_55px_rgba(30,24,18,0.08)] md:h-[520px]">
        Loading service area map...
      </div>
    ),
    ssr: false
  }
);

export function ClientServiceAreaMap() {
  return <DynamicServiceAreaMap />;
}
