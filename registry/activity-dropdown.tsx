"use client";

import type React from "react";
import { useState } from "react";
import { Bell, MessageCircle, Award, Calendar, Tag, CheckSquare, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Activity {
  id: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

const allActivities: Activity[] = [
  {
    id: 1,
    icon: <MessageCircle className="h-4 w-4" />,
    iconBg: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    title: "New Message!",
    description: "Sarah sent you a message regarding the project.",
    time: "Just Now",
    unread: true,
  },
  {
    id: 2,
    icon: <Award className="h-4 w-4" />,
    iconBg: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    title: "Level Up!",
    description: "You've unlocked the 'Early Adopter' achievement.",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 3,
    icon: <Calendar className="h-4 w-4" />,
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
    title: "Reminder: Sync",
    description: "Your team sync begins in 30 minutes.",
    time: "3 hour ago",
    unread: false,
  },
  {
    id: 4,
    icon: <Tag className="h-4 w-4" />,
    iconBg: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
    title: "Special Offer",
    description: "Save 30% off on the premium subscription.",
    time: "12 hours ago",
    unread: false,
  },
  {
    id: 5,
    icon: <CheckSquare className="h-4 w-4" />,
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
    title: "Task Assigned",
    description: "A new review task is awaiting your input.",
    time: "Yesterday",
    unread: false,
  },
];

export function ActivityDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const [activities, setActivities] = useState(allActivities);

  const displayedActivities = activeTab === "all" ? activities : activities.filter((a) => a.unread);
  const unreadCount = activities.filter((a) => a.unread).length;

  const markAllAsRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivities(activities.map((a) => ({ ...a, unread: false })));
  };

  return (
    <div
      className={cn(
        "w-full max-w-[420px] select-none",
        "rounded-[28px] border border-border/20",
        "bg-card/60 backdrop-blur-2xl",
        "shadow-2xl shadow-black/5 dark:shadow-black/40",
        "transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)",
        isOpen ? "scale-100" : "hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/10 cursor-pointer"
      )}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="flex items-center gap-4 p-5">
        <div
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted shadow-inner cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <Bell className="h-6 w-6 text-foreground" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-red-500 shadow-sm">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white opacity-80"></span>
            </span>
          )}
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span className="inline-flex items-center rounded-full bg-red-500/10 dark:bg-red-500/20 px-2.5 py-0.5 text-xs font-bold text-red-600 dark:text-red-400">
                {unreadCount} New
              </span>
            )}
          </div>
          <p
            className={cn(
              "text-sm text-muted-foreground mt-0.5 truncate transition-all duration-300",
              isOpen ? "opacity-0 translate-y-1 h-0" : "opacity-100 translate-y-0"
            )}
          >
            You have {unreadCount} unread messages
          </p>

          {/* Tabs */}
          <div
            className={cn(
              "flex items-center gap-1 mt-2 transition-all duration-500 delay-100",
              isOpen ? "opacity-100 translate-y-0 h-auto" : "opacity-0 -translate-y-2 h-0 overflow-hidden"
            )}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("all");
              }}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                activeTab === "all"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              All
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab("unread");
              }}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium transition-colors",
                activeTab === "unread"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              Unread
            </button>
            <div className="flex-1" />
            <button
              onClick={markAllAsRead}
              className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              <Check className="h-3 w-3" /> Mark all read
            </button>
          </div>
        </div>
        
        <div 
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <ChevronRight
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)",
              isOpen ? "-rotate-90" : "rotate-90"
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "grid",
          "transition-[grid-template-rows,opacity,padding] duration-500 cubic-bezier(0.22, 1, 0.36, 1)",
          isOpen ? "grid-rows-[1fr] opacity-100 px-3 pb-4" : "grid-rows-[0fr] opacity-0 px-3 pb-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1.5 pt-2 max-h-[320px] overflow-y-auto no-scrollbar mask-image-bottom">
            {displayedActivities.length > 0 ? (
              displayedActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={cn(
                    "group relative flex items-center gap-4 rounded-[20px] p-3",
                    "transition-all duration-300 cursor-pointer",
                    "hover:bg-accent shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                  onClick={() => {
                    const newActivities = activities.map((a) =>
                      a.id === activity.id ? { ...a, unread: false } : a
                    );
                    setActivities(newActivities);
                  }}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                      activity.iconBg
                    )}
                  >
                    {activity.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 
                        className={cn(
                          "text-sm font-semibold truncate transition-colors",
                          activity.unread 
                            ? "text-card-foreground" 
                            : "text-muted-foreground"
                        )}
                      >
                        {activity.title}
                      </h4>
                      <span className="shrink-0 text-[11px] font-medium text-muted-foreground">
                        {activity.time}
                      </span>
                    </div>
                    <p className="truncate text-[13px] text-muted-foreground mt-0.5">
                      {activity.description}
                    </p>
                  </div>
                  {activity.unread && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center opacity-70">
                <CheckSquare className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium text-muted-foreground">
                  You're all caught up!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* CSS for custom scrollbar mask */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-image-bottom {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}} />
    </div>
  );
}