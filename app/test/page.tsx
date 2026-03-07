"use client"

import AndroidMockup from '@/components/android-mockup'
import React from 'react'
import { Home, Search, Bell, User, Bookmark } from 'lucide-react'

function AndroidScreen() {
  return (
    <div className="relative w-full min-h-full bg-white dark:bg-zinc-950 flex flex-col">

      {/* Status bar */}
      <div className="sticky top-0 z-10 flex justify-between items-center px-5 pt-4 pb-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          <div className="w-4 h-2.5 rounded-sm border border-zinc-400 dark:border-zinc-500 relative">
            <div className="absolute inset-[2px] right-[3px] bg-zinc-800 dark:bg-zinc-200 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 px-4 pb-24 space-y-4 pt-2">

        {/* Hero card */}
        <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 p-5 text-white">
          <p className="text-xs font-medium opacity-70 mb-1">Good morning</p>
          <h2 className="text-xl font-bold tracking-tight">Welcome back 👋</h2>
          <p className="text-xs opacity-60 mt-1">Here's what's happening today</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Projects", value: "12", color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20" },
            { label: "Tasks", value: "34", color: "from-amber-500/10 to-orange-500/10 border-amber-500/20" },
          ].map(s => (
            <div key={s.label} className={`rounded-xl bg-gradient-to-br ${s.color} border p-4`}>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Recent section */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">Recent</p>
          <div className="space-y-2">
            {[
              { title: "Design System Update", sub: "2 hours ago", dot: "bg-violet-500" },
              { title: "API Integration", sub: "5 hours ago", dot: "bg-blue-500" },
              { title: "User Research", sub: "Yesterday", dot: "bg-emerald-500" },
              { title: "Component Library", sub: "2 days ago", dot: "bg-pink-500" },
              { title: "Analytics Dashboard", sub: "3 days ago", dot: "bg-amber-500" },
            ].map(item => (
              <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
                <div className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">Activity</p>
          <div className="flex gap-1 items-end h-16">
            {[4, 7, 5, 9, 6, 8, 10, 7, 5, 8, 6, 9, 7, 4].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-violet-500/20 dark:bg-violet-500/30"
                style={{ height: `${h * 10}%` }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom dock */}
      <div className="fixed bottom-0 left-0 right-0 z-0 px-4 pb-2">
        <div className="mx-3 mb-4 flex items-center justify-around px-2 py-3 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-border shadow-lg">
          {[
            { icon: Home, active: true },
            { icon: Search, active: false },
            { icon: Bell, active: false },
            { icon: Bookmark, active: false },
            { icon: User, active: false },
          ].map(({ icon: Icon, active }, i) => (
            <button key={i} className={`p-2 rounded-xl transition-colors ${active ? 'text-violet-500 bg-violet-500/10' : 'text-muted-foreground'}`}>
              <Icon size={18} strokeWidth={active ? 2.5 : 1.8} />
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-background">
      <AndroidMockup >
        <AndroidScreen />
      </AndroidMockup>
    </div>
  )
}