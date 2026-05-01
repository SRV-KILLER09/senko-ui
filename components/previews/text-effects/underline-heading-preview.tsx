"use client"

import UnderlineHeading from "@/registry/underlined-heading"
import React from "react"

export const UnderlineHeadingSaaS = () => (
  <UnderlineHeading
    content={["Scalable infrastructure", "for modern developers"]}
    highlightContent={["modern developers"]}
    className="text-4xl md:text-5xl font-medium tracking-tight max-w-4xl text-center"
    highlightClassName="bg-indigo-500 h-[6px] bottom-1 opacity-80"
    textGradientClass="text-foreground"
    behind={false}
  />
)

export const UnderlineHeadingAI = () => (
  <UnderlineHeading
    content={["Intelligence that", "evolves with your data"]}
    highlightContent={["evolves"]}
    className="text-4xl md:text-5xl font-semibold tracking-tighter max-w-4xl text-center"
    highlightClassName="bg-cyan-400/30 h-1/2 bottom-0 rounded-sm z-0"
    textGradientClass="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
    behind={true}
  />
)

export const UnderlineHeadingCafe = () => (
  <UnderlineHeading
    content={["Freshly roasted beans", "delivered to your door"]}
    highlightContent={["Freshly roasted"]}
    className="text-4xl md:text-5xl font-serif italic max-w-4xl text-center"
    highlightClassName="bg-orange-400/20 h-full bottom-0 -rotate-1"
    textGradientClass="text-foreground"
    behind={false}
  />
)

export const UnderlineHeadingFinTech = () => (
  <UnderlineHeading
    content={["Banking security", "you can actually trust"]}
    highlightContent={["actually trust"]}
    className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl text-center"
    highlightClassName="bg-emerald-500 h-[3px] bottom-0"
    textGradientClass="text-foreground"
    behind={false}
  />
)