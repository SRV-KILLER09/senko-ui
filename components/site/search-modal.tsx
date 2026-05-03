"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X, FileText, Hash, AlignLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchHit {
  id: string;
  url: string;
  title: string;
  description?: string;
  content?: string;
  type: "page" | "heading" | "text";
}

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
      setActiveIndex(0);
    }
  }, [open]);

  // Fetch results with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/search?query=${encodeURIComponent(query.trim())}&tag=`
        );
        if (res.ok) {
          const data = await res.json();
          // fumadocs returns { results: [...] } or an array
          const hits = Array.isArray(data) ? data : (data?.results ?? []);
          setResults(hits.slice(0, 12));
          setActiveIndex(0);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(t);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        window.location.href = results[activeIndex].url;
        onOpenChange(false);
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    },
    [results, activeIndex, onOpenChange]
  );

  const typeIcon = (type: string) => {
    if (type === "page") return <FileText className="w-3.5 h-3.5 shrink-0 text-zinc-400" />;
    if (type === "heading") return <Hash className="w-3.5 h-3.5 shrink-0 text-zinc-400" />;
    return <AlignLeft className="w-3.5 h-3.5 shrink-0 text-zinc-400" />;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-1/2 top-[18%] z-[201] w-full max-w-xl -translate-x-1/2 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
              {/* Input row */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/10 dark:border-white/10">
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search components, docs..."
                  className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder:text-zinc-400 outline-none"
                />
                {loading && (
                  <div className="w-4 h-4 rounded-full border-2 border-zinc-300 dark:border-zinc-600 border-t-zinc-600 dark:border-t-zinc-300 animate-spin" />
                )}
                <button
                  onClick={() => onOpenChange(false)}
                  className="p-1 rounded-md text-zinc-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto">
                {results.length === 0 && query && !loading && (
                  <p className="text-sm text-zinc-500 text-center py-10">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                )}

                {results.length === 0 && !query && (
                  <p className="text-xs text-zinc-400 text-center py-8">
                    Start typing to search docs and components&hellip;
                  </p>
                )}

                {results.length > 0 && (
                  <ul className="p-2 flex flex-col gap-0.5">
                    {results.map((r, i) => (
                      <li key={r.id ?? i}>
                        <Link
                          href={r.url}
                          onClick={() => onOpenChange(false)}
                          className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            i === activeIndex
                              ? "bg-black/5 dark:bg-white/10 text-black dark:text-white"
                              : "text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                          }`}
                          onMouseEnter={() => setActiveIndex(i)}
                        >
                          {typeIcon(r.type)}
                          <span className="flex-1 min-w-0">
                            <span className="font-medium block truncate">{r.title}</span>
                            {(r.description || r.content) && (
                              <span className="text-xs text-zinc-400 block truncate mt-0.5">
                                {r.description ?? r.content}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-4 py-2 border-t border-black/10 dark:border-white/10 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">↵</kbd> select</span>
                <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">Esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
