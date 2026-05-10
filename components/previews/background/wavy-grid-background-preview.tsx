import WavyGridBackground from "@/registry/wavy-grid-background";

import React from 'react'

export const WavyGridBackgroundPreview = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <WavyGridBackground mode="contained" />
    </div>
  )
}
