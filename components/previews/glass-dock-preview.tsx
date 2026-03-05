"use client";

import React, { useState, useEffect } from "react";
import { 
  Home, 
  Github, 
  Sun, 
  Moon, 
  Cpu, 
  ExternalLink 
} from "lucide-react";
import { useTheme } from "next-themes";
import { GlassDock } from "@/components/glass-dock";

export default function GlassDockPreview() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dockItems = [
    { 
      label: "Home", 
      icon: Home, 
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) 
    },
    { 
      label: "Registry", 
      icon: Cpu, 
      onClick: () => console.log("Navigate to Registry") 
    },
    { 
      label: "Github", 
      icon: Github, 
      onClick: () => window.open("https://github.com", "_blank") 
    },
    {
      label: "Theme",
      icon: theme === "dark" ? Sun : Moon,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  if (!mounted) return null;

  return (
    <div className="relative mt-10 flex justify-center  pointer-events-none">
        <div className="pointer-events-auto z-50">
          <GlassDock items={dockItems} className="w-7xl" />
        </div>
      </div>
  );
}