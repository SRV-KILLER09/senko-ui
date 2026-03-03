"use client"

import * as React from "react";
import { useTheme } from "next-themes";
import {
  Home as HomeIcon,
  Sun,
  Moon,
  Github,
  Component,
  Phone
} from "lucide-react";

import { GlassDock } from "@/components/glass-dock";
import IconicHeroExample from "@/components/iconic-heading-example";
import { GlassLogin } from "@/components/glass-login";
import UnderlineHeading from "@/components/underlined-heading";
import {
  Carousel,
  CarouselRow,
  CarouselItem
} from "@/components/carousel";
import { LightTrailBadge } from "@/components/LightTrailBadge";
import WavyGridBackground from "@/components/WavyGridBackground";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { BeveledBorderButton } from "@/components/BeveledBorderButton";
import PillNavbar from "@/components/GlassyTopBar";
import { ThemeToggle } from "@/components/theme-toggle";

const CAROUSEL_DATA = [
  { name: "Google", icon: ( <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" /><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" /><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" /><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" /></svg> )},
  { name: "Tailwind", icon: ( <svg width="16" height="16" viewBox="0 0 32 32"><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="#44a8b3" /></svg> )},
  { name: "React", icon: ( <svg width="16" height="16" viewBox="0 0 32 32"><circle cx="16" cy="15.974" r="2.5" fill="#007acc" /><path d="M16,21.706a28.385,28.385,0,0,1-8.88-1.2,11.3,11.3,0,0,1-3.657-1.958A3.543,3.543,0,0,1,2,15.974c0-1.653,1.816-3.273,4.858-4.333A28.755,28.755,0,0,1,16,10.293a28.674,28.674,0,0,1,9.022,1.324,11.376,11.376,0,0,1,3.538,1.866A3.391,3.391,0,0,1,30,15.974c0,1.718-2.03,3.459-5.3,4.541A28.8,28.8,0,0,1,16,21.706Zm0-10.217a27.948,27.948,0,0,0-8.749,1.282c-2.8.977-4.055,2.313-4.055,3.2,0,.928,1.349,2.387,4.311,3.4A27.21,27.21,0,0,0,16,20.51a27.6,27.6,0,0,0,8.325-1.13C27.4,18.361,28.8,16.9,28.8,15.974a2.327,2.327,0,0,0-1.01-1.573,10.194,10.194,0,0,0-3.161-1.654A27.462,27.462,0,0,0,16,11.489Z" fill="#007acc" /><path d="M10.32,28.443a2.639,2.639,0,0,1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755,28.755,0,0,1,3.4-8.593h0A28.676,28.676,0,0,1,16.71,5.995a11.376,11.376,0,0,1,3.384-2.133,3.391,3.391,0,0,1,2.878,0c1.489.858,1.982,3.486,1.287,6.859a28.806,28.806,0,0,1-3.316,8.133,28.385,28.385,0,0,1-5.476,7.093,11.3,11.3,0,0,1-3.523,2.189A4.926,4.926,0,0,1,10.32,28.443Zm1.773-14.7a27.948,27.948,0,0,0-3.26,8.219c-.553,2.915-.022,4.668.75,5.114.8.463,2.742.024,5.1-2.036a27.209,27.209,0,0,0,5.227-6.79,27.6,27.6,0,0,0,3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327,2.327,0,0,0-1.868.089A10.194,10.194,0,0,0,17.5,6.9a27.464,27.464,0,0,0-5.4,6.849Z" fill="#007acc" /><path d="M21.677,28.456c-1.355,0-3.076-.82-4.868-2.361a28.756,28.756,0,0,1-5.747-7.237h0a28.676,28.676,0,0,1-3.374-8.471,11.376,11.376,0,0,1-.158-4A3.391,3.391,0,0,1,8.964,3.9c1.487-.861,4.01.024,6.585,2.31a28.8,28.8,0,0,1,5.39,6.934,28.384,28.384,0,0,1,3.41,8.287,11.3,11.3,0,0,1,.137,4.146,3.543,3.543,0,0,1-1.494,2.555A2.59,2.59,0,0,1,21.677,28.456Zm-9.58-10.2a27.949,27.949,0,0,0,5.492,6.929c2.249,1.935,4.033,2.351,4.8,1.9.8-.465,1.39-2.363.782-5.434A27.212,27.212,0,0,0,19.9,13.74,27.6,27.6,0,0,0,14.755,7.1c-2.424-2.152-4.39-2.633-5.191-2.169a2.327,2.327,0,0,0-.855,1.662,10.194,10.194,0,0,0,.153,3.565,27.465,27.465,0,0,0,3.236,8.1Z" fill="#007acc" /></svg> )},
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter()

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const dockThemeIcon = mounted ? (theme === "dark" ? Sun : Moon) : Moon;
  const navLinks = [
    { label: "Components", href: "/components" },
    { label: "Blocks", href: "/blocks" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" }
  ]
  const dockItems = [
    { label: "Home", icon: HomeIcon, onClick: () => console.log("home") },
    { label: "Components", icon: Component, onClick: () => console.log("components") },
    { label: "Github", icon: Github, onClick: () => router.push("https://github.com/Shourya523") },
    {
      label: "Theme",
      icon: dockThemeIcon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    }
  ];

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center text-foreground pb-40 overflow-x-hidden ">
      <WavyGridBackground squareSize={10} maxOpacity={0.2} gridGap={.1} height={1000} />

      <PillNavbar
        items={navLinks}
        logo={<div className="font-bold">TS-UI</div>}
        actions={[
          <ThemeToggle key="theme" className="w-5 h-5" />,
          <BeveledBorderButton key="login" title="Login" />,
        ]}
      />

      <section className="w-full max-w-5xl mt-20 px-5 pt-10 md:pt-20 pb-16 flex flex-col items-center z-1">
        <LightTrailBadge className="mb-10 shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
          🌟 Find Components that Suit You
        </LightTrailBadge>
        <UnderlineHeading
          content={["Beautifully Crafted", "React Components"]}
          highlightContent={["React"]}
          highlightClassName="bg-blue-300"
          className="text-[2rem] md:text-7xl mb-8"
        />
        <p className="text-md text-center text-muted-foreground max-w-2xl">
          A collection of copy-and-paste components built with Tailwind CSS and Framer Motion for your next web application.
        </p>
      </section>

      <div className="flex justify-center items-center gap-4 md:gap-10">
        <BeveledBorderButton title="Get Started" />
        <BeveledBorderButton className="relative z-1 bg-white hover:bg-neutral-100 text-black text-sm font-medium transition-colors duration-200 rounded-full px-5 py-2 gap-2 flex items-center justify-center border border-black/5 shadow-[inset_0_-1px_0_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] cursor-pointer" title="Contact Us" icon={Phone} />
      </div>

      <section className="w-full max-w-6xl px-5 py-12 flex flex-col gap-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <LightTrailBadge className="w-fit mt-5">Dynamic Typography</LightTrailBadge>
            <h2 className="text-3xl font-bold tracking-tight">Iconic Headers</h2>
            <p className="text-muted-foreground text-lg">
              Dynamic, animated headers that mix icons inline with your text to create striking heroic introductions.
            </p>
          </div>
          <div className="bg-muted/30 border border-border/50 rounded-2xl flex justify-center items-center py-20 px-4 relative overflow-hidden">
            <IconicHeroExample />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-muted/30 border border-border/50 rounded-2xl py-12 px-4 relative flex justify-center overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <Carousel>
              <div className="flex flex-col gap-6 w-full max-w-sm">
                <CarouselRow direction="left" duration={35}>
                  {CAROUSEL_DATA.slice(0, 4).map((item, idx) => (
                    <CarouselItem key={`row1-${idx}`}>
                      {item.icon}
                      <span className="text-xs font-medium text-foreground">{item.name}</span>
                    </CarouselItem>
                  ))}
                </CarouselRow>
                <CarouselRow direction="right" duration={45}>
                  {CAROUSEL_DATA.slice(0, 4).map((item, idx) => (
                    <CarouselItem key={`row2-${idx}`}>
                      {item.icon}
                      <span className="text-xs font-medium text-foreground">{item.name}</span>
                    </CarouselItem>
                  ))}
                </CarouselRow>
              </div>
            </Carousel>
          </div>
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <LightTrailBadge className="w-fit">Zero-JS Loops</LightTrailBadge>
            <h2 className="text-3xl font-bold tracking-tight">Infinite Carousel</h2>
            <p className="text-muted-foreground text-lg">
              A perfectly looping, natively performing CSS carousel. Completely theme aware with no JavaScript intersection observers needed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <LightTrailBadge className="w-fit">Frosted UI</LightTrailBadge>
            <h2 className="text-3xl font-bold tracking-tight">Glassmorphism UI</h2>
            <p className="text-muted-foreground text-lg">
              Authentic frosted glass components that respect dark and light modes, casting gorgeous ambient reflections.
            </p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 border border-border/50 rounded-2xl flex justify-center items-center py-24 px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[80px] rounded-full -z-10 pointer-events-none" />
            <GlassLogin />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] bg-muted/30 border border-border/50 rounded-2xl overflow-hidden">
            <WavyGridBackground squareSize={8} gridGap={2} maxOpacity={0.18} mode="contained" />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="text-center space-y-3 px-6">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground drop-shadow-sm">Subtle. Elegant. Cinematic.</h3>
                <p className="text-sm text-muted-foreground">Fully theme aware. GPU accelerated.</p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none z-10" />
          </div>
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <LightTrailBadge className="w-fit">GPU Accelerated</LightTrailBadge>
            <h2 className="text-3xl font-bold tracking-tight">Wavy Grid Background</h2>
            <p className="text-muted-foreground text-lg">
              A smooth, theme-aware animated grid powered by canvas. Lightweight, GPU-accelerated and perfect for hero sections.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <LightTrailBadge>MacOS Style</LightTrailBadge>
              <LightTrailBadge>Framer Motion</LightTrailBadge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Interactive Glass Dock</h2>
            <p className="text-muted-foreground text-lg">
              A fluid, macOS-inspired navigation dock with high-end glassmorphism effects. 
              Features smooth hover scaling, ambient shadows, and native-feeling interactions.
            </p>
          </div>
          <div className="relative group bg-gradient-to-b from-muted/20 to-muted/50 border border-border/40 rounded-3xl flex justify-center items-end py-16 px-4 min-h-[300px] overflow-hidden">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 w-full flex justify-center">
              <GlassDock items={dockItems} />
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="absolute top-6 text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold">Interactive Preview</motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}