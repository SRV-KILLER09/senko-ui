"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Safari } from "@/components/safari-view";
import { GlassLogin } from "@/components/glass-login";
import { Carousel, CarouselRow, CarouselItem } from "@/components/carousel";
import { Cpu, Plus, ShieldCheck, Layers, Moon, Sun } from "lucide-react";
import WavyGridBackground from "@/components/WavyGridBackground";

const tabs = ["Hero", "Features", "Components", "Templates"];

export default function TSUIPreview() {
  const [active, setActive] = useState("Features");
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
      <Safari url="ts-ui.com">
        <div className="w-full h-full bg-white dark:bg-[#050505] flex flex-col min-h-[700px] text-zinc-900 dark:text-white transition-colors duration-500 selection:bg-blue-500/30">
          
          {/* Top Navigation Bar */}
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/5 px-8 py-4 bg-zinc-50/50 dark:bg-[#080808] backdrop-blur-md">
            <div className="flex items-center gap-8">
              <div className="font-black text-base italic tracking-tighter uppercase">
                TS<span className="text-blue-600">.</span>UI
              </div>
              <nav className="hidden md:flex items-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`px-4 py-1.5 text-[10px] rounded-full font-bold uppercase tracking-widest transition-all duration-300 ${
                      active === tab
                        ? "bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center gap-6">
               <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-white/5 transition-colors"
               >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
               </button>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">v1.0.4 Live</span>
               </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-10 md:p-16 overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto">
              
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter italic uppercase">
                    Built for Fast Moving <br /> 
                    Teams That <span className="text-blue-600">Need Control.</span>
                  </h2>
                </div>
                <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed font-medium border-l-2 border-zinc-200 dark:border-zinc-800 pl-6">
                  Components work inside your existing tools, with built-in 
                  approvals, brand consistency, and native Framer Motion support.
                </p>
              </div>

              {/* High-End Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                
                {/* Card 1: GlassLogin */}
                <div className="group relative flex flex-col bg-zinc-50 dark:bg-[#0A0A0A] rounded-[2.5rem] border border-zinc-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl dark:hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                  <div className="relative h-[300px] flex items-center justify-center p-8 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]">
                    <div className="scale-[0.5] transition-all duration-700 group-hover:scale-[0.55] group-hover:-rotate-1">
                      <GlassLogin />
                    </div>
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                      <ShieldCheck className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent mb-6" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-sm font-black italic uppercase tracking-tight">Prebuilt Auth Modules</h3>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Tuned to your workflows</p>
                      </div>
                      <div className="p-2 rounded-full border border-zinc-200 dark:border-white/10 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Carousel */}
                <div className="group relative flex flex-col bg-zinc-50 dark:bg-[#0A0A0A] rounded-[2.5rem] border border-zinc-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl">
                  <div className="relative h-[300px] flex flex-col items-center justify-center gap-4 p-8">
                    <div className="w-full space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <Carousel>
                        <CarouselRow direction="left" duration={30}>
                          {["Automate", "Scale", "Deploy", "Repeat"].map((item, i) => (
                            <CarouselItem key={i} className="bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 px-4 py-2 text-[9px] font-black uppercase italic tracking-[0.2em] text-zinc-800 dark:text-white">
                              {item}
                            </CarouselItem>
                          ))}
                        </CarouselRow>
                      </Carousel>
                      <div className="flex justify-center">
                         <div className="px-3 py-1 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-500 text-[8px] font-black rounded-full border border-blue-500/20 uppercase tracking-widest">
                           Optimization Active
                         </div>
                      </div>
                      <Carousel>
                        <CarouselRow direction="right" duration={25}>
                          {["React", "Next.js", "Motion", "Tailwind"].map((item, i) => (
                            <CarouselItem key={i} className="bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 px-4 py-2 text-[9px] font-black uppercase italic tracking-[0.2em] text-zinc-800 dark:text-white">
                              {item}
                            </CarouselItem>
                          ))}
                        </CarouselRow>
                      </Carousel>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent mb-6" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-sm font-black italic uppercase tracking-tight">Handoff Automation</h3>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Reduce Ops Friction</p>
                      </div>
                      <div className="p-2 rounded-full border border-zinc-200 dark:border-white/10 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Wavy Grid */}
                <div className="group relative flex flex-col bg-zinc-50 dark:bg-[#0A0A0A] rounded-[2.5rem] border border-zinc-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl">
                  
                  
                  <div className="p-8 pt-0">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent mb-6" />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="text-sm font-black italic uppercase tracking-tight">System Guardrails</h3>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Full Auditability</p>
                      </div>
                      <div className="p-2 rounded-full border border-zinc-200 dark:border-white/10 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Safari>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
        }
      `}</style>
    </div>
  );
}