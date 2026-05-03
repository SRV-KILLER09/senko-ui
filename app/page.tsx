"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Code2, Layout, Layers, Zap, Shield, Smartphone, Palette, Grid, Lock, MousePointer2, Terminal, Copy, Check, ChevronRight, ChevronDown, Menu, X, MessageCircle, Search } from "lucide-react";
import { SearchModal } from "@/components/site/search-modal";

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
import { ThemeToggle } from "@/components/site/theme-toggle";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("auth");
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad|iPod/i.test(navigator.platform));
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-black dark:selection:text-white transition-colors duration-300">

      {/* Background Grid - Linear Style */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1200px] h-full border-x border-black/[0.02] dark:border-white/[0.02] bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-400">Senko UI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("docs")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors py-2">
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
                  <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                    <Link href="/docs" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Getting Started</Link>
                    <Link href="/docs" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Installation</Link>
                    <Link href="/docs" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Theming</Link>
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
            <button className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors py-2">
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
                  <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-2 shadow-2xl">
                    <Link href="/docs/components/light-trail-badge" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Components</Link>
                    <Link href="/docs/device-mocks/browser" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Mocks</Link>
                    <Link href="/docs/backgrounds/wavy-grid-background" className="block px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors">Backgrounds</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-6 ml-2">
            <button
              id="search-trigger-desktop"
              onClick={() => setSearchOpen(true)}
              aria-label="Search documentation"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all text-xs font-medium"
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span>Search</span>
              <kbd className="hidden lg:inline-flex px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-400 font-mono leading-none">
                {isMac ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>
            <ThemeToggle className="w-5 h-5 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors" />
            <Link href="/docs" className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm">Get Started</Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="search-trigger-mobile"
            onClick={() => setSearchOpen(true)}
            aria-label="Search documentation"
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <ThemeToggle className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
          <button
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Documentation</div>
                  <Link href="/docs/getting-started" className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">Getting Started</Link>
                  <Link href="/docs/installation" className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">Installation</Link>
                </div>
                <div className="w-full h-px bg-black/5 dark:bg-white/5" />
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Components</div>
                  <Link href="/components/buttons" className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">Buttons</Link>
                  <Link href="/components/cards" className="block py-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">Glass Cards</Link>
                </div>
                <div className="w-full h-px bg-black/5 dark:bg-white/5" />
                <Link href="/docs" className="block w-full py-3 text-center bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium mt-4">
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-8 shadow-sm backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Introducing Senko UI v1.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Build interfaces that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/40">demand attention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 font-normal leading-relaxed"
          >
            A premium, highly-polished React component system for modern SaaS and AI applications. Zero generic layouts. Total design control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/docs" className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
              Browse Components
            </Link>
            <Link href="/docs" className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-black dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group">
              Read Docs <ChevronRight className="w-4 h-4 ml-1 text-zinc-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-8 w-full max-w-md"
          >
            <button
              id="search-trigger-hero"
              onClick={() => setSearchOpen(true)}
              aria-label="Search components and documentation"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-black/10 dark:border-white/10 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-black/20 dark:hover:border-white/20 transition-all text-left"
            >
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <span className="text-sm text-zinc-400 dark:text-zinc-500 flex-1">Search components, docs...</span>
              <kbd className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 shrink-0 leading-none">
                {isMac ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>
          </motion.div>
        </section>

        {/* HERO SHOWCASE (THE MAIN PREVIEW) */}
        <section className="hidden md:block w-full max-w-[1200px] mx-auto mt-20 md:mt-32 perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-2xl overflow-hidden group hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_80px_rgba(255,255,255,0.08)] transition-shadow duration-500"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-500/20 blur-[120px] pointer-events-none group-hover:opacity-75 transition-opacity" />

            <Safari url="studio.senko.dev" className="shadow-2xl bg-zinc-50 dark:bg-[#0a0a0a]">
              <div className="w-full h-full flex overflow-hidden bg-white dark:bg-[#0a0a0a]">

                {/* Sidebar */}
                <div className="hidden lg:flex w-64 border-r border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-black/40 backdrop-blur-md p-4 flex-col gap-6">
                  {/* Brand */}
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white dark:text-black" />
                    </div>
                    <span className="font-bold text-sm text-black dark:text-white tracking-tight">Senko AI</span>
                  </div>

                  {/* New Chat Button */}
                  <div>
                    <AuroraButton>
                      <MessageCircle className="w-4 h-4" />
                      New Chat
                    </AuroraButton>
                  </div>

                  {/* Chat History */}
                  <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-2 -mx-2 px-2">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-2 mb-1">Recent</div>
                    <div className="px-3 py-2 bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-lg text-xs font-medium cursor-pointer flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-zinc-500" /> Web UI Refactor
                    </div>
                    <div className="px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors rounded-lg text-xs flex items-center gap-2 cursor-pointer">
                      <MessageCircle className="w-3.5 h-3.5" /> Next.js 15 Migration
                    </div>
                    <div className="px-3 py-2 text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors rounded-lg text-xs flex items-center gap-2 cursor-pointer">
                      <MessageCircle className="w-3.5 h-3.5" /> Component Architecture
                    </div>
                  </div>

                  {/* User Profile */}
                  <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-3 px-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-black dark:text-white">Alex Developer</span>
                      <span className="text-[10px] text-zinc-500">Pro Plan</span>
                    </div>
                  </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 relative flex flex-col min-w-0 bg-white dark:bg-transparent">
                  {/* Top Bar */}
                  <div className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-6 z-20 bg-white/40 dark:bg-black/40 backdrop-blur-md">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                      <span className="text-xs font-medium text-black dark:text-white">Senko-v1.0 (Reasoning)</span>
                      <ChevronDown className="w-3 h-3 text-zinc-500" />
                    </div>
                    {/* <div className="absolute right-3 top-15 z-50 scale-[0.8] origin-top-right">
                      <ActivityDropdown />
                    </div> */}
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 z-0">
                      <WavyGridBackground mode="contained" maxOpacity={0.1} height={1000} />
                    </div>

                    <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-12 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-6 mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white flex items-center justify-center shadow-xl">
                          <Zap className="w-8 h-8 text-white dark:text-black" />
                        </div>
                        <h2 className="text-2xl font-semibold text-black dark:text-white tracking-tight">How can I help you today?</h2>

                        {/* Suggestion Chips */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl mt-8">
                          <GlassCard className="p-4 text-left cursor-pointer hover:-translate-y-1 transition-transform border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-sm">
                            <h4 className="text-sm font-medium text-black dark:text-white mb-1">Explain quantum computing</h4>
                            <p className="text-xs text-zinc-500">in simple terms for a beginner</p>
                          </GlassCard>
                          <GlassCard className="p-4 text-left cursor-pointer hover:-translate-y-1 transition-transform border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-sm">
                            <h4 className="text-sm font-medium text-black dark:text-white mb-1">Refactor this React code</h4>
                            <p className="text-xs text-zinc-500">to use Server Components</p>
                          </GlassCard>
                        </div>
                      </div>
                    </div>

                    {/* Prompt Box Area */}
                    <div className="relative z-20 w-full px-4 pb-6 pt-4 bg-gradient-to-t from-white via-white to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-transparent flex justify-center">
                      <div className="w-full max-w-3xl flex flex-col items-center">
                        <PromptInputBox />
                        <p className="text-[10px] text-zinc-400 text-center mt-3 font-medium">Senko AI can make mistakes. Consider verifying important information.</p>
                      </div>
                    </div>
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
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl">Every component is meticulously crafted with Framer Motion and Tailwind CSS. Built to be customized, not overwritten.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-black/10 dark:hover:border-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 dark:from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 mb-12">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm">
                  <Zap className="w-6 h-6 text-black dark:text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">60FPS Animations</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed">Powered by physics-based animations. Interactions feel physical, snappy, and perfectly tuned to human expectations.</p>
              </div>
              <div className="mt-auto relative h-32 flex items-end">
                <div className="w-full h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-black/10 dark:hover:border-white/10 transition-all duration-300">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm">
                  <Palette className="w-6 h-6 text-black dark:text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailwind Native</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Theme your entire application in seconds. No complex CSS-in-JS. Just clean, manageable utility classes.</p>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-black/10 dark:hover:border-white/10 transition-all duration-300">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="w-6 h-6 text-black dark:text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessible First</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Keyboard navigation, screen reader support, and focus management built right into the foundation.</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-3xl p-8 flex flex-col lg:flex-row gap-8 relative overflow-hidden group hover:border-black/10 dark:hover:border-white/10 transition-all duration-300">
              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm">
                  <Smartphone className="w-6 h-6 text-black dark:text-zinc-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Perfect hitboxes, smooth scaling, and native-feeling gesture support for touch devices out of the box.</p>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-full max-w-[220px] transform group-hover:-translate-y-2 transition-transform duration-500">
                  <IPhoneMockup className="shadow-2xl">
                    <div className="w-full h-full bg-white dark:bg-black relative flex flex-col justify-end p-4 pb-8 border border-black/10 dark:border-white/10">
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
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">You own the code.</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-md leading-relaxed">Copy and paste beautifully crafted components directly into your application. Fully customizable. Zero vendor lock-in. Total control.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-sm">
                    <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
                  </div>
                  Copy straight to your project
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-sm">
                    <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
                  </div>
                  Modify everything effortlessly
                </div>
              </div>
            </div>

            <div className="flex-1 w-full bg-zinc-50 dark:bg-[#050505] border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-white/[0.02] border-b border-black/5 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 ml-2">terminal</span>
                </div>
                <button onClick={handleCopy} className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                  {copied ? <Check className="w-4 h-4 text-green-500 dark:text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-zinc-700 dark:text-zinc-300 bg-white/50 dark:bg-transparent">
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">npx</span>
                  <span>shadcn@latest add https://senko-ui.vercel.app/r/button.json</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-zinc-500 dark:text-zinc-400 flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-green-500" />
                  Component button downloaded successfully.
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="w-full max-w-3xl mx-auto mt-32 md:mt-48 text-center border-t border-black/5 dark:border-white/5 pt-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Build better interfaces.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10">Join developers building the next generation of SaaS and AI products.</p>
          <Link href="/docs" className="h-12 px-10 inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Get Started Free
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-[#050505] py-16 px-6 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-12">

          {/* Interactive Components */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Interactive</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs/components/activity-dropdown" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Activity Dropdown</Link>
              <Link href="/docs/components/aurora-button" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Aurora Button</Link>
              <Link href="/docs/components/beveled-border-button" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Beveled Button</Link>
              <Link href="/docs/components/like-button" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Like Button</Link>
              <Link href="/docs/components/magnetic-pit-slider" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Magnetic Slider</Link>
            </div>
          </div>

          {/* Layout Components */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Layout</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs/components/bento-grid" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Bento Grid</Link>
              <Link href="/docs/components/carousel" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Carousel</Link>
              <Link href="/docs/components/glass-card" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Glass Card</Link>
              <Link href="/docs/components/glass-container" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Glass Container</Link>
              <Link href="/docs/components/social-proof" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Social Proof</Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Navigation</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs/components/glass-dock" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Glass Dock</Link>
              <Link href="/docs/components/pill-navbar" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Pill Navbar</Link>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Mockups</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs/components/android-mockup" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Android Mockup</Link>
              <Link href="/docs/components/iphone-mockup" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">iPhone Mockup</Link>
              <Link href="/docs/components/laptop-mockup" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Laptop Mockup</Link>
              <Link href="/docs/components/safari-view" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Safari View</Link>
            </div>
          </div>

          {/* Backgrounds & Text */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Effects</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs/components/ai-prompt-box-glassmorphism" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">AI Prompt (Glass)</Link>
              <Link href="/docs/components/ai-prompt-box-neomorphism" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">AI Prompt (Neo)</Link>
              <Link href="/docs/components/animated-grid-background" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Animated Grid</Link>
              <Link href="/docs/components/glass-login" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Glass Login</Link>
              <Link href="/docs/components/iconic-heading" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Iconic Heading</Link>
              <Link href="/docs/components/light-trail-badge" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Light Trail Badge</Link>
              <Link href="/docs/components/mesh-gradient" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Mesh Gradient</Link>
              <Link href="/docs/components/underlined-heading" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Underlined Heading</Link>
              <Link href="/docs/components/wavy-grid-background" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Wavy Grid</Link>
            </div>
          </div>

          {/* Resources Column - Hidden on mobile, shown on larger screens */}
          <div className="hidden md:flex flex-col gap-4 md:col-span-1">
            <h3 className="font-semibold text-sm text-black dark:text-zinc-300">Resources</h3>
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/docs" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Documentation</Link>
              <Link href="/docs/getting-started" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Getting Started</Link>
              <Link href="/docs/installation" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Installation</Link>
              <Link href="https://twitter.com" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">Twitter</Link>
            </div>
          </div>

          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:col-span-1 lg:col-span-6 border-t border-black/5 dark:border-white/5 pt-8 mt-8 md:mt-0 md:border-0 md:pt-0">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-md flex items-center justify-center shadow-sm">
                <Box className="w-3.5 h-3.5 text-white dark:text-black" />
              </div>
              <span className="font-semibold text-sm tracking-tight text-black dark:text-zinc-300">Senko UI</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Modern UI components built with React and Tailwind CSS. Beautiful, accessible, and highly customizable.
            </p>
          </div>
        </div>

      </footer>
    </div>

  );
}