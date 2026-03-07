"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavBarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  actions?: React.ReactNode[];
  className?: string;
}

export default function PillNavBar({
  items,
  logo,
  actions,
  className,
}: PillNavBarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mouseX = useMotionValue(Infinity);

  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const scale = useTransform(scrollVelocity, [0, 100], [1, 0.98]);
  const y = useTransform(scrollVelocity, [0, 100], [0, 6]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none",
        className
      )}
    >
      <motion.div
        style={{ scale, y }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setHoveredIndex(null);
        }}
        className={cn(
          "pointer-events-auto relative flex w-full max-w-4xl flex-col rounded-[24px] overflow-hidden transition-colors duration-500",
          "bg-white/70 border border-black/[0.08] shadow-2xl backdrop-blur-xl",
          "dark:bg-zinc-950/40 dark:border-white/[0.08] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_20px_50px_rgba(0,0,0,0.5)]"
        )}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-3">
          {logo && (
            <div className="flex items-center min-w-fit transition-opacity hover:opacity-80">
              {logo}
            </div>
          )}
          <nav className="hidden md:flex items-center gap-1.5 bg-black/[0.03] dark:bg-white/[0.05] p-1 rounded-2xl border border-black/[0.01] dark:border-white/[0.02]">
            {items.map((item, index) => (
              <NavLink
                key={item.label}
                href={item.href}
                index={index}
                mouseX={mouseX}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {actions?.map((action, i) => (
              <React.Fragment key={i}>{action}</React.Fragment>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-xl transition-colors text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/20 dark:bg-white/[0.02]"
            >
              <div className="flex flex-col gap-2 p-6">
                {items.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3.5 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}

                {actions && (
                  <div className="flex items-center gap-3 mt-2 pt-6 border-t border-black/5 dark:border-white/5">
                    {actions.map((action, i) => (
                      <React.Fragment key={i}>{action}</React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

function NavLink({
  href,
  children,
  index,
  mouseX,
  hoveredIndex,
  setHoveredIndex,
}: any) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const mScale = useTransform(distance, [-120, 0, 120], [1, 1.08, 1]);
  const scale = useSpring(mScale, { stiffness: 200, damping: 18 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseEnter={() => setHoveredIndex(index)}
      style={{ scale }}
      className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
    >
      <span className="relative z-10">{children}</span>

      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            layoutId="nav-pill"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 bg-black/5 dark:bg-white/[0.08] rounded-xl -z-0"
          />
        )}
      </AnimatePresence>
    </motion.a>
  );
}