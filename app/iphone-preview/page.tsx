"use client";

import React from "react";
import { 
  Zap, 
  Plus, 
  BarChart3, 
  LayoutDashboard, 
  MessageSquare, 
  User,
  ShieldCheck,
  Cpu,
  Home,
  Settings,
  Github
} from "lucide-react";

import IPhoneMockup from "@/components/iphone-mockup";
import { GlassLogin } from "@/components/glass-login";
import { Carousel, CarouselRow, CarouselItem } from "@/components/carousel";
import WavyGridBackground from "@/components/WavyGridBackground";
import { BeveledBorderButton } from "@/components/BeveledBorderButton";
import { GlassDock } from "@/components/glass-dock";

const techStack = ["Metrics", "Security", "Scale", "Auth"];

export default function IphoneSaaSPreview() {
  const dockItems = [
    { label: "Home", icon: Home, onClick: () => console.log("Home") },
    { label: "Dashboard", icon: LayoutDashboard, onClick: () => console.log("Dash") },
    { label: "Projects", icon: Cpu, onClick: () => console.log("Projects") },
    { label: "GitHub", icon: Github, onClick: () => console.log("GitHub") },
    { label: "Settings", icon: Settings, onClick: () => console.log("Settings") },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-10">
      <IPhoneMockup>
        <div className="relative w-full h-full bg-white dark:bg-[#050505] flex flex-col overflow-hidden font-sans">
          
          <div className="absolute inset-0 z-0 opacity-40">
            <WavyGridBackground 
              mode="contained" 
              squareSize={12} 
              gridGap={0.5} 
              maxOpacity={0.1} 
            />
          </div>

          <div className="h-11 w-full shrink-0 relative z-10" />

          <div className="flex-1 overflow-y-auto relative z-10 custom-scrollbar pb-32">
            
            <header className="px-6 py-6 space-y-2">
              <div className="font-black text-xl tracking-tighter italic uppercase dark:text-white">
                TS<span className="text-blue-600">.</span>UI
              </div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">
                Enterprise Dashboard
              </p>
            </header>

            <section className="px-4 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative scale-90 -my-10">
                  <GlassLogin />
                </div>
              </div>
            </section>

            <section className="space-y-4 mb-8">
              <div className="px-6 flex items-center justify-between">
                <h3 className="text-xs font-black uppercase italic dark:text-white">Live Operations</h3>
                <Zap className="w-3 h-3 text-blue-500 animate-pulse fill-blue-500" />
              </div>
              
              <Carousel>
                <CarouselRow direction="left" duration={20}>
                  {techStack.map((item, i) => (
                    <CarouselItem
                      key={i}
                      className="bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10 px-4 py-2 text-[9px] font-black tracking-widest uppercase italic"
                    >
                      {item}
                    </CarouselItem>
                  ))}
                </CarouselRow>
              </Carousel>
            </section>

            <section className="px-6 space-y-6">
              <div className="p-6 rounded-[2rem] bg-zinc-950 border border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600/10 rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">System Guardrails Active</p>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                  Your deployment pipeline is fully optimized. No friction detected in recent handoffs.
                </p>
                <div className="flex justify-center pt-2">
                  <BeveledBorderButton title="View Full Audit" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm">
                  <Cpu className="w-5 h-5 text-blue-600 mb-3" />
                  <p className="text-[10px] font-black uppercase italic dark:text-white">Compute</p>
                  <p className="text-[18px] font-black dark:text-white">98.2%</p>
                </div>
                <div className="p-5 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 shadow-sm">
                  <BarChart3 className="w-5 h-5 text-blue-600 mb-3" />
                  <p className="text-[10px] font-black uppercase italic dark:text-white">Throughput</p>
                  <p className="text-[18px] font-black dark:text-white">12k/s</p>
                </div>
              </div>
            </section>
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center z-50">
             <div className="scale-[0.85] origin-bottom">
                <GlassDock items={dockItems} />
             </div>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full z-[60]" />
        </div>
      </IPhoneMockup>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}