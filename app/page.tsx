"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Home,
  Github,
  Sun,
  Moon,
  Cpu,
  ShieldCheck,
  Workflow,
  ChevronRight,
  Layout,
  Layers,
  Component,
  Copy,
  Check,
  ExternalLink,
  Smartphone,
  MousePointer2,
  Terminal,
} from "lucide-react";
import { useTheme } from "next-themes";

import { GlassDock } from "@/components/glass-dock";
import { GlassLogin } from "@/components/glass-login";
import { BentoCard, BentoGrid } from "@/components/bento-grid";
import { Carousel, CarouselRow, CarouselItem } from "@/components/carousel";
import { LightTrailBadge } from "@/components/LightTrailBadge";
import WavyGridBackground from "@/components/WavyGridBackground";
import { BeveledBorderButton } from "@/components/BeveledBorderButton";
import PillNavbar from "@/components/PillNavbar";
import { IconicHeading } from "@/components/Icon-ic-Heading";
import UnderlineHeading from "@/components/underlined-heading";
import { IPhoneSaaSPreview } from "@/components/iphone-saas-preview";
import { Safari } from "@/components/safari-view";
import { SafariShowcase } from "@/components/safari-showcase";

const techStack = [
  "Framer Motion",
  "Tailwind CSS",
  "React",
  "Next.js",
  "TypeScript",
  "Shadcn/UI",
  "Radix UI",
];

export default function TSUIModernShowcase() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [responsiveScale, setResponsiveScale] = useState(1);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setResponsiveScale(0.85);
      } else {
        setResponsiveScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx shadcn@latest add https://ts-ui-nine.vercel.app/r/light-trail-badge.json");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) return null;

  const dockItems = [
    { label: "Home", icon: Home, onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "Registry", icon: Cpu, onClick: () => document.getElementById('registry')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Github", icon: Github, onClick: () => window.open("https://github.com", "_blank") },
    {
      label: "Theme",
      icon: theme === "dark" ? Sun : Moon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  const registryComponents = [
    {
      Icon: ShieldCheck,
      name: "Authentication",
      description: "Sophisticated login flows built with glassmorphism and secure patterns.",
      className: "col-span-1 md:col-span-4 row-span-2",
      background: (
        <div className="absolute inset-0 flex items-center justify-center scale-[0.55] opacity-20 group-hover:opacity-100 group-hover:scale-[0.6] transition-all duration-1000">
          <GlassLogin />
        </div>
      ),
    },
    {
      Icon: Smartphone,
      name: "Viewport Simulations",
      description: "Professional device mockups for a pixel-perfect showcase of your work.",
      className: "col-span-1 md:col-span-4 row-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center scale-[0.4] opacity-20 group-hover:scale-[0.45] transition-all duration-1000">
          <div className="scale-75 origin-center">
            <IPhoneSaaSPreview />
          </div>
        </div>
      )
    },
    {
      Icon: MousePointer2,
      name: "Navigation Systems",
      description: "Floating docks and interactive navbars that enhance user engagement.",
      className: "col-span-1 md:col-span-4 row-span-1",
      background: (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center scale-75 opacity-20 group-hover:opacity-100 transition-opacity">
          <GlassDock items={dockItems.slice(0, 3)} />
        </div>
      )
    },
    {
      Icon: Zap,
      name: "Signature Typography",
      description: "Icon-integrated headings designed for a premium SaaS feel.",
      className: "col-span-1 md:col-span-8",
      background: (
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
          <IconicHeading
            lines={[
              {
                text: "Modern Interfaces",
                icon: <Zap className="w-[60%] h-[60%]" />,
                iconPosition: "between",
                className: "font-semibold text-6xl tracking-tight text-zinc-900 dark:text-white",
                iconClassName: "bg-blue-600/50",
              },
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-[#030303] text-zinc-900 dark:text-zinc-100 font-sans overflow-x-hidden selection:bg-blue-500/20">

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-70">
        <WavyGridBackground squareSize={30} gridGap={0.2} maxOpacity={0.15} />
      </div>

      {/* NAVIGATION */}
      <PillNavbar
        logo={
          <div className="font-bold text-lg tracking-tight flex items-center gap-1">
            <div className="size-4 bg-blue-600 rounded-sm" />
            <span>TS<span className="text-blue-600">.</span>UI</span>
          </div>
        }
        items={[
          { label: "Components", href: "/docs/components" },
          { label: "Documentation", href: "/docs" },
          { label: "Device Mockups", href: "/docs/device-mocks" },
        ]}
        actions={[<BeveledBorderButton key="cta" title="Copy Registry" onClick={copyCommand} />]}
      />

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center px-6 pt-24 lg:pt-32 pb-10 lg:pb-20 mt-10">
          <div className="w-full max-w-7xl mx-auto text-center space-y-12">

            {/* Text Content wrapped to maintain readability */}
            <div className="max-w-4xl mx-auto space-y-8">
              <LightTrailBadge>
                <div className="flex items-center gap-2 px-1 py-0.5">
                  <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                    TS-UI
                  </span>
                  <div className="w-1 h-1 bg-zinc-300 rounded-full" />
                  <span className="text-zinc-500 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
                    Next.js SaaS Components
                  </span>
                </div>
              </LightTrailBadge>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter leading-[0.9] text-zinc-900 dark:text-white">
                  Design for the <br />
                  <span className="text-blue-600">Future.</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
                  A signature collection of copy-paste components for Next.js.
                  Minimalist aesthetics met with high-performance motion.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <BeveledBorderButton title="Explore Components" onClick={() => document.getElementById('registry')?.scrollIntoView({ behavior: 'smooth' })} />
                <button
                  onClick={copyCommand}
                  className="group flex items-center gap-3 px-8 py-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-100 dark:hover:bg-white/10 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Terminal className="w-4 h-4 text-blue-500" />}
                  {copied ? "Copied Command" : "Copy Install Command"}
                </button>
              </div>
            </div>

            {/* FLOATING PREVIEW ELEMENT - Now has more room to breathe */}
            <div className="pt-20 lg:pt-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              {/* Desktop Preview: Safari */}
              <div className="hidden lg:block relative group mx-auto w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 to-purple-500/0 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-3xl shadow-2xl transition-transform duration-700 hover:translate-y-[-10px]">
                  <Safari url="ts-ui.com/showcase" className="w-full">
                    <div className="w-full aspect-[16/10] bg-zinc-50 dark:bg-[#050505]">
                      <SafariShowcase />
                    </div>
                  </Safari>
                </div>
              </div>

              {/* Mobile/Tablet Preview: Modular iPhone Mockup */}
              <div className="lg:hidden flex justify-center w-full px-4 overflow-visible">
                <div
                  className="flex justify-center w-full transition-transform duration-500"
                  style={{ height: responsiveScale < 1 ? '650px' : '770px' }}
                >
                  <IPhoneSaaSPreview scale={responsiveScale} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTRY SECTION */}
        <section id="registry" className="max-w-7xl mx-auto px-6 py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-end">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 dark:text-white leading-tight">
                The Modern <br />
                Component Catalog.
              </h2>
              <p className="text-zinc-500 font-medium max-w-lg">
                Purpose-built components for SaaS founders who need to ship beautiful interfaces without the overhead.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end gap-3">
              <div className="px-4 py-2 border border-zinc-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-white/5">Accessible</div>
              <div className="px-4 py-2 border border-blue-200 dark:border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">Type-Safe</div>
              <div className="px-4 py-2 border border-zinc-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white dark:bg-white/5">Performant</div>
            </div>
          </div>

          <BentoGrid className="grid-cols-1 md:grid-cols-8 gap-8 auto-rows-[22rem]">
            {registryComponents.map((comp, idx) => (
              <BentoCard key={idx} {...comp} />
            ))}
          </BentoGrid>
        </section>

        {/* TECH REVEAL SECTION */}
        <section className="bg-white dark:bg-[#050505] border-y border-zinc-200 dark:border-white-10 py-32 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <IconicHeading
                lines={[
                  {
                    text: "Unified Stack",
                    icon: <Workflow className="w-[60%] h-[60%]" />,
                    iconPosition: "start",
                    className: "text-4xl md:text-6xl font-semibold tracking-tight",
                    iconClassName: "bg-zinc-100 dark:bg-zinc-800",
                  },
                ]}
              />
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-medium">
                Designed to live harmoniously with the standard Shadcn UI ecosystem.
                No redundant libraries, no bloated dependencies. Just pure Tailwind and Framer Motion.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Native Framer Motion", desc: "60fps interactions out of the box." },
                  { title: "Tailwind First", desc: "Easily themeable with standard CSS variables." },
                  { title: "Radix Optimized", desc: "Full accessibility support for every interaction." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 size-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Check className="size-3 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-200 uppercase tracking-widest">{item.title}</h4>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="p-4 border border-zinc-200 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{tech}</span>
                    <Check className="size-3 text-green-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DYNAMIC SHOWCASE CAROUSEL */}
        <section className="py-24 overflow-hidden">
          <Carousel>
            <CarouselRow direction="left" duration={50}>
              {[...techStack, "Customizable", "Responsive", "Lightweight", "Open Source"].map((item, i) => (
                <CarouselItem
                  key={i}
                  className="bg-zinc-50 dark:bg-[#080808] border border-zinc-200 dark:border-white/10 px-10 py-4 text-[11px] font-black tracking-[0.2em] uppercase italic text-zinc-400"
                >
                  {item}
                </CarouselItem>
              ))}
            </CarouselRow>
          </Carousel>
        </section>

        {/* CTA HERO */}
        <section className="py-40 px-6 border-t border-zinc-200 dark:border-white/10 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
              Ship like a <br />
              <span className="text-blue-600">Pro.</span>
            </h2>
            <div className="flex justify-center flex-col items-center gap-6">
              <p className="text-xl text-zinc-500 font-medium max-w-xl">
                Elevate your application with signature components designed for the premium web.
              </p>
              <div className="scale-110 pt-4">
                <BeveledBorderButton title="Access the Registry" />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative py-20 border-t border-zinc-200 dark:border-white/10 px-6 bg-white dark:bg-[#030303] z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="font-bold text-2xl tracking-tighter flex items-center justify-center md:justify-start gap-2">
              <div className="size-6 bg-blue-600 rounded-md" />
              <span>TS<span className="text-blue-600">.</span>UI</span>
            </div>
            <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em]">
              Premium Registry © 2026
            </p>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Registry</h4>
              <ul className="text-xs space-y-3 font-bold uppercase tracking-widest text-zinc-500">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Components</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Blocks</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Templates</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Community</h4>
              <ul className="text-xs space-y-3 font-bold uppercase tracking-widest text-zinc-500">
                <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2 transition-colors">GitHub <ExternalLink size={12} /></li>
                <li className="hover:text-blue-600 cursor-pointer flex items-center gap-2 transition-colors">Twitter <ExternalLink size={12} /></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* DOCK */}
      <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <GlassDock items={dockItems} />
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background-color: rgba(37, 99, 235, 0.15);
          color: inherit;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .dark :-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
