"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Code2, Layout, Layers, Zap, Shield, Smartphone, Palette, Grid, Lock, MousePointer2, Terminal, Copy, Check, ChevronRight, ChevronDown, Menu, X } from "lucide-react";

// Components
import { Safari } from "@/registry/safari-view";
import IPhoneMockup from "@/registry/iphone-mockup";
import { GlassLogin } from "@/registry/glass-login";
import { ActivityDropdown } from "@/registry/activity-dropdown";
import { PromptInputBox } from "@/registry/ai-prompt-box-glassmorphism";
import WavyGridBackground from "@/registry/wavy-grid-background";
import { GlassCard } from "@/registry/glass-card";
import { AnimatedGridBackground } from "@/registry/animated-grid-background";
import AuroraButton from "@/registry/aurora-button";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("auth");
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white">

      {/* Background Grid - Linear Style */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1200px] h-full border-x border-white/[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">Senko UI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("docs")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors py-2">
              Documentation <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {activeDropdown === "docs" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48"
                >
                  <div className="bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl">
                    <Link href="/docs" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Getting Started</Link>
                    <Link href="/docs" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Installation</Link>
                    <Link href="/docs" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Theming</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("components")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors py-2">
              Components <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {activeDropdown === "components" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48"
                >
                  <div className="bg-zinc-900 border border-white/10 rounded-xl p-2 shadow-2xl">
                    <Link href="/docs/components/light-trail-badge" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Components</Link>
                    <Link href="/docs/device-mocks/browser" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Mocks</Link>
                    <Link href="/docs/backgrounds/wavy-grid-background" className="block px-3 py-2 hover:bg-white/5 rounded-md text-zinc-300 hover:text-white transition-colors">Backgrounds</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/docs" className="px-4 py-1.5 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Documentation</div>
                  <Link href="/docs/getting-started" className="block py-2 text-zinc-300 hover:text-white">Getting Started</Link>
                  <Link href="/docs/installation" className="block py-2 text-zinc-300 hover:text-white">Installation</Link>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Components</div>
                  <Link href="/components/buttons" className="block py-2 text-zinc-300 hover:text-white">Buttons</Link>
                  <Link href="/components/cards" className="block py-2 text-zinc-300 hover:text-white">Glass Cards</Link>
                </div>
                <div className="w-full h-px bg-white/5" />
                <Link href="/docs" className="block w-full py-3 text-center bg-white text-black rounded-lg font-medium mt-4">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 w-full flex flex-col items-center pt-32 md:pt-48 pb-24 px-6">

        {/* HERO SECTION */}
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" /> Introducing Senko UI v1.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Build interfaces that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">demand attention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed"
          >
            A premium, highly-polished React component system for modern SaaS and AI applications. Zero generic layouts. Total design control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link href="/docs" className="h-11 px-8 inline-flex items-center justify-center rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
              Browse Components
            </Link>
            <Link href="/docs" className="h-11 px-8 inline-flex items-center justify-center rounded-md bg-zinc-900 border border-zinc-800 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
              Read Docs <ChevronRight className="w-4 h-4 ml-1 text-zinc-500" />
            </Link>
          </motion.div>
        </section>

        {/* HERO SHOWCASE (THE MAIN PREVIEW) */}
        <section className="hidden md:block w-full max-w-[1200px] mx-auto mt-20 md:mt-32 perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-xl border border-white/10 bg-black shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] pointer-events-none" />

            <Safari url="studio.senko.dev" className="shadow-2xl">
              <div className="w-full h-full flex overflow-hidden bg-[#0a0a0a]">

                {/* Left Panel - Layers */}
                <div className="hidden lg:flex w-56 border-r border-white/5 bg-black/60 p-5 flex-col gap-4">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Workspace</div>
                  <div className="px-3 py-2 bg-blue-500/10 text-blue-400 rounded-md text-xs font-medium border border-blue-500/20 shadow-inner flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" /> Authentication View
                  </div>
                  <div className="px-3 py-2 text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-2">
                    <Layout className="w-3.5 h-3.5" /> Dashboard Layout
                  </div>
                  <div className="px-3 py-2 text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-2">
                    <Grid className="w-3.5 h-3.5" /> Settings Panel
                  </div>
                </div>

                {/* Main Canvas */}
                <div className="flex-1 relative flex flex-col min-w-0">
                  {/* Top Canvas Bar */}
                  <div className="h-12 border-b border-white/5 bg-black/40 flex items-center justify-between px-6 z-20">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-zinc-300">page.tsx</span>
                      <span className="text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">Saved</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-xs font-medium text-zinc-400 hover:text-white cursor-pointer">Preview</div>
                      <div className="w-px h-4 bg-white/10" />
                      <span className="text-[10px] font-mono text-zinc-500">100%</span>
                    </div>
                  </div>

                  {/* Canvas Area */}
                  <div className="flex-1 relative bg-[#050505] overflow-hidden flex items-center justify-center p-6 lg:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 z-0">
                      <WavyGridBackground mode="contained" maxOpacity={0.2} height={1000} />
                    </div>

                    <div className="relative z-10 w-full max-w-sm transform hover:scale-[1.02] transition-transform duration-500 cursor-pointer shadow-2xl shadow-blue-500/10">

                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md lg:max-w-xl z-20 px-4">
                      <PromptInputBox />
                    </div>
                  </div>
                </div>

                {/* Right Panel - Properties */}
                <div className="hidden md:flex w-64 border-l border-white/5 bg-black/60 p-5 flex-col gap-6 overflow-y-auto custom-scrollbar">
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Properties</div>

                  <div className="space-y-4">
                    <GlassCard className="p-4 bg-zinc-900/30 border-white/5 shadow-none rounded-xl">
                      <div className="text-xs font-semibold text-white mb-4">Glassmorphism</div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-zinc-400">Backdrop Blur</span>
                            <span className="text-[10px] text-white bg-white/10 px-1.5 py-0.5 rounded">24px</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[75%] h-full bg-blue-500" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-zinc-400">Opacity</span>
                            <span className="text-[10px] text-white bg-white/10 px-1.5 py-0.5 rounded">60%</span>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[60%] h-full bg-purple-500" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard className="p-4 bg-zinc-900/30 border-white/5 shadow-none rounded-xl">
                      <div className="text-xs font-semibold text-white mb-4">Framer Motion</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400">Initial State</span>
                          <span className="text-[10px] font-mono text-zinc-300">y: 20, opacity: 0</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-zinc-400">Animate</span>
                          <span className="text-[10px] font-mono text-zinc-300">y: 0, opacity: 1</span>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <span className="text-[10px] text-zinc-400">Easing</span>
                          <span className="text-[10px] text-white px-2 py-0.5 bg-zinc-800 rounded border border-white/10">easeOut</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

              </div>
            </Safari>
          </motion.div>
        </section>

        {/* FEATURES (LINEAR STYLE BENTO) */}
        <section className="w-full max-w-[1200px] mx-auto mt-32 md:mt-48">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Engineered for perfection.</h2>
            <p className="text-zinc-400 text-lg max-w-xl">Every component is meticulously crafted with Framer Motion and Tailwind CSS. Built to be customized, not overwritten.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 mb-12">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">60FPS Animations</h3>
                <p className="text-zinc-400 text-sm max-w-sm">Powered by physics-based animations. Interactions feel physical, snappy, and perfectly tuned.</p>
              </div>
              <div className="mt-auto relative h-32 flex items-end">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Palette className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailwind Native</h3>
                <p className="text-zinc-400 text-sm">Theme your entire application in seconds. No complex CSS-in-JS.</p>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessible</h3>
                <p className="text-zinc-400 text-sm">Keyboard navigation and screen reader support out of the box.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 flex flex-col lg:flex-row gap-8 relative overflow-hidden group">
              <div className="relative z-10 flex-1">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-5 h-5 text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                <p className="text-zinc-400 text-sm">Perfect hitboxes, smooth scaling, and native-feeling gesture support for touch devices.</p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-full max-w-[220px]">
                  <IPhoneMockup className="shadow-2xl">
                    <div className="w-full h-full bg-black relative flex flex-col justify-end p-4 pb-8 border border-white/10">
                      <PromptInputBox />
                    </div>
                  </IPhoneMockup>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPER EXPERIENCE */}
        <section className="w-full max-w-[1200px] mx-auto mt-32 md:mt-48">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">You own the code.</h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-md">Copy and paste beautifully crafted components directly into your application. Fully customizable. Zero vendor lock-in.</p>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Check className="w-3 h-3 text-green-400" />
                </div>
                Copy to your project
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300 mt-3">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Check className="w-3 h-3 text-green-400" />
                </div>
                Modify everything
              </div>
            </div>

            <div className="flex-1 w-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-500" />
                  <span className="text-xs font-mono text-zinc-400">terminal</span>
                </div>
                <button onClick={handleCopy} className="text-zinc-500 hover:text-white transition-colors">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-zinc-300">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">npx</span>
                  <span>shadcn@latest add https://senko.dev/r/button.json</span>
                </div>
                <div className="mt-4 text-zinc-500 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Component button downloaded successfully.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full max-w-3xl mx-auto mt-32 md:mt-48 text-center border-t border-white/5 pt-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Build better interfaces.</h2>
          <p className="text-zinc-400 text-lg mb-10">Join developers building the next generation of SaaS and AI products.</p>
          <Link href="/docs" className="h-11 px-8 inline-flex items-center justify-center rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
            Get Started Free
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/5 bg-[#050505] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
              <Box className="w-3 h-3 text-black" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-zinc-300">Senko UI</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/components" className="hover:text-white transition-colors">Components</Link>
            <Link href="https://twitter.com" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}