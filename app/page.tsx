"use client";

import React, { useState, useEffect } from "react";
import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Box, Code2, Layout, Layers, Zap, Shield, Smartphone, Palette, Grid, Lock, MousePointer2, Terminal, Copy, Check, ChevronRight, ChevronDown, Menu, X, MessageCircle, Search, ArrowUpRight, Github, Twitter } from "lucide-react";
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
import { ShaderBackground } from "@/registry/shader-background";
import { BentoCard, BentoGrid } from "@/registry/bento-grid";

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("auth");
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const { messages, sendMessage, status, setMessages } = useChat({
    api: '/api/chat',
  });
  const isLoading = status === 'submitted' || status === 'streaming';

  const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const staggerChildren: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

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

  const handleDemoSend = (message: string) => {
    const text = message.trim();
    if (!text) return;
    sendMessage({ role: "user", content: text });
  };

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-black dark:selection:text-white transition-colors duration-300 overflow-x-hidden">

      {/* Full-width shader background fading out at the bottom */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
        <ShaderBackground intensity={1} fps={30} quality={1} className="!absolute inset-0 !z-0" />
        <div className="absolute inset-0 senko-noise opacity-[0.10] dark:opacity-[0.14] z-0" />
      </div>

      {/* Cinematic overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 senko-noise opacity-[0.09] dark:opacity-[0.13] z-0" />
        <div className="absolute inset-0 senko-vignette hidden dark:block opacity-[0.62]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-gradient-to-b from-blue-500/18 via-violet-500/10 to-transparent blur-[120px] dark:from-blue-500/22 dark:via-violet-500/14 opacity-80" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-cyan-400/16 via-emerald-400/8 to-transparent blur-[130px] dark:from-cyan-400/20 dark:via-emerald-400/10 opacity-70" />
      </div>

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

      <main className="relative z-10 w-full flex flex-col items-center pt-20 md:pt-28 pb-24 px-6">

        {/* HERO SECTION */}
        <section className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center py-4 md:py-6">
          {/* Hero background removed to allow full-page shader to shine through */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-6 shadow-sm backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1] mb-4"
          >
            Build interfaces that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 dark:from-white dark:to-white/40">demand attention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-7 font-normal leading-relaxed"
          >
            A premium, highly-polished React component system for modern SaaS and AI applications. Zero generic layouts. Total design control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
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
            className="mt-6 w-full max-w-md"
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

          <motion.div
            aria-hidden="true"
            className="hidden md:flex items-center gap-2 mt-6 text-xs text-zinc-500 dark:text-zinc-400"
            animate={{ y: [0, 6, 0], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="inline-block h-5 w-3 rounded-full border border-black/15 dark:border-white/15 relative">
              <span className="absolute left-1/2 top-1 -translate-x-1/2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            </span>
            Scroll
          </motion.div>
        </section>

        {/* HERO SHOWCASE (THE MAIN PREVIEW) */}
        <section className="hidden md:block w-full max-w-[1080px] mx-auto mt-10 md:mt-14 perspective-[2000px]">
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
                    <div onClick={() => setMessages([])}>
                      <AuroraButton>
                        <MessageCircle className="w-4 h-4" />
                        New Chat
                      </AuroraButton>
                    </div>
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
                      <span className="text-xs font-medium text-black dark:text-white">Nikita</span>
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
                  </div>

                  {/* Chat Content */}
                  <div className="flex-1 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <WavyGridBackground mode="contained" maxOpacity={0.1} height={1000} />
                    </div>

                    <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 flex flex-col min-h-[360px]">
                      {messages.length === 0 ? (
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-6 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white flex items-center justify-center shadow-xl">
                              <Zap className="w-8 h-8 text-white dark:text-black" />
                            </div>
                            <h2 className="text-2xl font-semibold text-black dark:text-white tracking-tight">How can I help you today?</h2>

                            {/* Suggestion Chips */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-xl mt-8">
                              <GlassCard onClick={() => sendMessage({ role: 'user', content: 'Explain quantum computing in simple terms for a beginner' })} className="p-4 text-left cursor-pointer hover:-translate-y-1 transition-transform border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-sm">
                                <h4 className="text-sm font-medium text-black dark:text-white mb-1">Explain quantum computing</h4>
                                <p className="text-xs text-zinc-500">in simple terms for a beginner</p>
                              </GlassCard>
                              <GlassCard onClick={() => sendMessage({ role: 'user', content: 'Refactor this React code to use Server Components' })} className="p-4 text-left cursor-pointer hover:-translate-y-1 transition-transform border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 hover:bg-black/5 dark:hover:bg-white/5 shadow-sm">
                                <h4 className="text-sm font-medium text-black dark:text-white mb-1">Refactor this React code</h4>
                                <p className="text-xs text-zinc-500">to use Server Components</p>
                              </GlassCard>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-3">
                          {messages.map((m, idx) => (
                            <div
                              key={idx}
                              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                            >
                              <div
                                className={[
                                  "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm border",
                                  m.role === "user"
                                    ? "bg-black text-white border-black/10 dark:bg-white dark:text-black dark:border-white/10"
                                    : "bg-white/70 text-black border-black/10 dark:bg-black/40 dark:text-white dark:border-white/10 backdrop-blur-md prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-black/5 dark:prose-pre:bg-white/5 prose-pre:border prose-pre:border-black/10 dark:prose-pre:border-white/10",
                                ].join(" ")}
                              >
                                {m.role === 'user' ? (
                                  m.content
                                ) : (
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                                )}
                              </div>
                            </div>
                          ))}
                          {isLoading && messages[messages.length - 1]?.role === "user" && (
                            <div className="flex justify-start">
                              <div className="bg-white/70 text-black border-black/10 dark:bg-black/40 dark:text-white dark:border-white/10 backdrop-blur-md max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm border flex items-center gap-2">
                                <div className="flex gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="h-2" />
                        </div>
                      )}
                    </div>

                    {/* Prompt Box Area */}
                    <div className="relative z-20 w-full px-4 pb-6 pt-4 bg-gradient-to-t from-white via-white to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-transparent flex justify-center">
                      <div className="w-full max-w-3xl flex flex-col items-center">
                        <PromptInputBox isLoading={isLoading} onSend={(msg) => handleDemoSend(msg)} placeholder="Type and press Enter…" />
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
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-[1200px] mx-auto mt-24 md:mt-36"
        >
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Engineered for perfection.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl">Every component is meticulously crafted with Framer Motion and Tailwind CSS. Built to be customized, not overwritten.</p>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.03]" />
            <BentoGrid className="h-full md:grid-cols-5 md:grid-rows-2 gap-4">
              <BentoCard
                className="md:col-span-3 md:row-span-1"
                name="60FPS Animations"
                description="Powered by physics-based animations. Interactions feel physical, snappy, and perfectly tuned to human expectations."
                Icon={Zap}
                href="/docs"
                cta="Browse"
                glowColor="99, 102, 241"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/18 via-violet-500/8 to-transparent dark:from-blue-500/26 dark:via-violet-500/14" />
                    <div className="absolute inset-0 opacity-70">
                      <WavyGridBackground mode="contained" maxOpacity={0.12} />
                    </div>
                    <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_40%_30%,black_0%,transparent_60%)]">
                      <motion.div
                        animate={{ x: ["-20%", "20%", "-20%"], y: ["10%", "-10%", "10%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 top-0 h-[260px] w-[360px] rounded-full bg-cyan-400/12 blur-[80px]"
                      />
                    </div>
                  </div>
                }
              />

              <BentoCard
                className="md:col-span-2 md:row-span-1"
                name="Tailwind Native"
                description="Theme your entire application in seconds. No complex CSS-in-JS. Just clean, manageable utility classes."
                Icon={Layers}
                href="/docs/components/glass-card"
                cta="See card"
                glowColor="34, 211, 238"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.16),transparent_55%)]" />
                    <div className="absolute inset-0 senko-noise opacity-[0.10]" />
                    <motion.div
                      initial={{ opacity: 0.4, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-[72%] -rotate-3">
                        <GlassCard className="p-4 bg-white/25 dark:bg-black/25 border-white/10">
                          <div className="h-2 w-24 rounded bg-white/30 dark:bg-white/10" />
                          <div className="mt-3 h-2 w-32 rounded bg-white/25 dark:bg-white/10" />
                          <div className="mt-6 h-8 w-full rounded-xl bg-white/15 dark:bg-white/5" />
                        </GlassCard>
                      </div>
                    </motion.div>
                  </div>
                }
              />

              <BentoCard
                className="md:col-span-2 md:row-span-1"
                name="Accessible First"
                description="Keyboard navigation, screen reader support, and focus management built right into the foundation."
                Icon={Grid}
                href="/docs/components/bento-grid"
                cta="Use bento"
                glowColor="244, 63, 94"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/14 via-orange-500/8 to-transparent dark:from-rose-500/18 dark:via-orange-500/10" />
                    <div className="absolute inset-0 opacity-[0.55] dark:opacity-[0.65]">
                      <AnimatedGridBackground />
                    </div>
                    <div className="absolute inset-0 senko-noise opacity-[0.08]" />
                  </div>
                }
              />

              <BentoCard
                className="md:col-span-3 md:row-span-1"
                name="Mobile Optimized"
                description="Perfect hitboxes, smooth scaling, and native-feeling gesture support for touch devices out of the box."
                Icon={Smartphone}
                href="/docs/device-mocks/browser"
                cta="View mocks"
                glowColor="234, 179, 8"
                background={
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent dark:from-yellow-500/14" />
                    <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-yellow-400/10 blur-[70px]" />
                    <div className="absolute inset-0 flex items-end justify-end p-5">
                      <div className="w-[220px] origin-bottom-right rotate-[6deg] transition-transform duration-500 group-hover:rotate-[3deg] group-hover:scale-[1.02]">
                        <IPhoneMockup className="shadow-2xl">
                          <div className="w-full h-full bg-white dark:bg-black relative flex flex-col justify-end p-4 pb-8 border border-black/10 dark:border-white/10">
                            <PromptInputBox />
                          </div>
                        </IPhoneMockup>
                      </div>
                    </div>
                  </div>
                }
              />
            </BentoGrid>
          </motion.div>
        </motion.section>

        {/* DEVELOPER EXPERIENCE */}
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-[1200px] mx-auto mt-24 md:mt-36"
        >
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
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-3xl mx-auto mt-24 md:mt-36 text-center border-t border-black/5 dark:border-white/5 pt-16 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Build better interfaces.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10">Join developers building the next generation of SaaS and AI products.</p>
          <Link href="/docs" className="h-12 px-10 inline-flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Get Started Free
          </Link>
        </motion.section>

      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────────── */}
      <footer className="relative w-full bg-[#07080a] text-zinc-50 overflow-hidden border-t border-white/[0.06]">

        {/* Subtle glow behind the whole bar */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_50%_120%,rgba(99,102,241,0.13),transparent_70%)]" aria-hidden />

        {/* Top strip — brand + nav links all on one line */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">

          {/* Wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
              <Box className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-sm font-bold tracking-tight text-white">Senko UI</span>
            <span className="hidden sm:inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 inline-block" />
              v1.0
            </span>
          </div>

          {/* Nav links — collapsed into a single scrollable row */}
          <nav className="flex items-center gap-1 flex-wrap" aria-label="Footer navigation">
            {[
              { label: "Docs", href: "/docs" },
              { label: "Components", href: "/docs/components/light-trail-badge" },
              { label: "Backgrounds", href: "/docs/backgrounds/wavy-grid-background" },
              { label: "Mocks", href: "/docs/device-mocks/browser" },
              { label: "Bento Grid", href: "/docs/components/bento-grid" },
              { label: "Glass Card", href: "/docs/components/glass-card" },
              { label: "Aurora Button", href: "/docs/components/aurora-button" },
              { label: "Wavy Grid", href: "/docs/components/wavy-grid-background" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-3 py-1.5 rounded-lg text-[12px] text-zinc-500 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right — social + CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-150"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-150"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/docs"
              className="ml-1 inline-flex items-center gap-1.5 h-8 px-4 rounded-full bg-white text-black text-[12px] font-semibold hover:bg-zinc-200 transition-colors"
            >
              Get Started
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="relative z-10 border-t border-white/[0.04] max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-700 tracking-wide">
            © {new Date().getFullYear()} Senko UI — MIT License
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms"].map((item) => (
              <Link key={item} href="/docs" className="text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

      </footer>

    </div>
  );
}