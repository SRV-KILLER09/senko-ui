"use client"

import { Component, Zap, Layers, MousePointer2 } from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/bento-grid"
import { Carousel, CarouselRow, CarouselItem } from "@/components/carousel"
import { GlassLogin } from "@/components/glass-login"
import IconicHeroExample from "@/components/iconic-heading-example"
import WavyGridBackground from "@/components/WavyGridBackground"

const stack = [
  "React",
  "Tailwind",
  "Framer Motion",
  "Next.js",
  "TypeScript",
]

const features = [
  {
    Icon: Component,
    name: "Production Ready Components",
    description: "Copy-paste beautiful UI primitives and ship instantly.",
    href: "#",
    cta: "Browse components",

    // BIG FEATURE CARD
    className: "col-span-3 lg:col-span-5 row-span-2",

    background: (
      <div className="absolute inset-0 flex items-center justify-center scale-110 -rotate-6">
        <GlassLogin />
      </div>
    ),
  },

  {
    Icon: Zap,
    name: "Smooth Animations",
    description: "Polished interactions powered by Framer Motion.",
    href: "#",
    cta: "Explore animations",

    // TALL SIDE CARD
    className: "col-span-3 lg:col-span-3 row-span-2",

    background: (
      <div className="absolute inset-0 flex items-center justify-center scale-110">
        <IconicHeroExample />
      </div>
    ),
  },

  {
    Icon: Layers,
    name: "Modern Stack",
    description: "Built for React, Tailwind, and modern frontend workflows.",
    href: "#",
    cta: "See integrations",

    // WIDE CARD
    className: "col-span-3 lg:col-span-4",

    background: (
      <Carousel>
        <CarouselRow direction="left" duration={20}>
          {stack.map((item, i) => (
            <CarouselItem key={i}>
              {item}
            </CarouselItem>
          ))}
        </CarouselRow>
      </Carousel>
    ),
  },

  {
    Icon: MousePointer2,
    name: "Beautiful Background Systems",
    description: "Create stunning layouts with animated backgrounds.",
    href: "#",
    cta: "View examples",

    // SMALL CARD
    className: "col-span-3 lg:col-span-4",

    background: (
      <div className="absolute inset-0">
        <WavyGridBackground
          squareSize={15}
          maxOpacity={0.2}
          gridGap={0.2}
        />
      </div>
    ),
  },
]

export default function BentoPage() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <BentoGrid className="auto-rows-[18rem]">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}