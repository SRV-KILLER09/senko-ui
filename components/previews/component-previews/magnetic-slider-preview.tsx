"use client";

import { MagneticPitSlider } from "@/registry/magnetic-pit-slider";

export function MagneticSliderDefault() {
  return (
    <div className="flex items-center justify-center p-12 w-full">
      <MagneticPitSlider defaultValue={50} />
    </div>
  );
}

export function MagneticSliderCustom() {
  return (
    <div className="flex items-center justify-center p-12 w-full">
      <MagneticPitSlider defaultValue={30} min={0} max={200} step={5} barCount={32} />
    </div>
  );
}
