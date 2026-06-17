"use client";

import dynamic from "next/dynamic";

const DynamicServiceAreaMap = dynamic(
  () =>
    import("@/components/sections/ServiceAreaMap").then(
      (mod) => mod.ServiceAreaMap
    ),
  {
    loading: () => (
      <div className="flex h-[430px] items-center justify-center rounded-2xl border border-border bg-sand text-sm font-medium text-muted-foreground shadow-[0_28px_80px_rgb(31_25_18/0.10)] md:h-[540px]">
        Loading Austin-area service map...
      </div>
    ),
    ssr: false
  }
);

export function ClientServiceAreaMap() {
  return <DynamicServiceAreaMap />;
}
