"use client"

import { useState, useEffect } from "react"
import { RotateCcw, Copy, Check } from "lucide-react"
import { codeToHtml } from "shiki"
import { OpenInV0Button } from "@/components/site/open-in-v0-button"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  v0Link?: string
  lang?: string
}

export function ComponentPreview({
  children,
  code,
  v0Link,
  lang = "tsx",
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")
  const [key, setKey] = useState(0)
  const [highlighted, setHighlighted] = useState<string>("")
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  // Detect theme from html class
  useEffect(() => {
    const update = () => {
      const isDark = document.documentElement.classList.contains("dark")
      setTheme(isDark ? "dark" : "light")
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  // Highlight code with shiki whenever code or theme changes
  useEffect(() => {
    let cancelled = false
    async function highlight() {
      const html = await codeToHtml(code.trim(), {
        lang,
        themes: {
          dark: "github-dark",
          light: "github-light",
        },
        defaultColor: theme,
      })
      if (!cancelled) setHighlighted(html)
    }
    highlight()
    return () => {
      cancelled = true
    }
  }, [code, lang, theme])

  return (
    <div className="rounded-xl border border-border bg-background overflow-hidden my-6 shadow-sm">
      {/* Tab Bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-0 border-b border-border">
        <div className="flex items-center gap-1">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-2 text-sm font-medium capitalize transition-colors relative ${tab === t
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t}
              {tab === t && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pb-1">
          {v0Link && <OpenInV0Button name={v0Link} />}
          {tab === "preview" && (
            <button
              onClick={() => setKey((k) => k + 1)}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Reset preview"
            >
              <RotateCcw size={13} />
            </button>
          )}
          {tab === "code" && <CopyButton code={code} />}
        </div>
      </div>

      {/* Preview Panel */}
      {tab === "preview" && (
        <div
          key={key}
          className="min-h-[380px] flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--muted))_0%,hsl(var(--background))_70%)]"
        >
          {children}
        </div>
      )}

      {/* Code Panel — matches fumadocs MDX code block style */}
      {tab === "code" && (
        <div className="relative">
          {highlighted ? (
            <div
              className="
                text-sm
                [&>pre]:p-5
                [&>pre]:overflow-x-auto
                [&>pre]:max-h-[480px]
                [&>pre]:overflow-y-auto
                [&>pre]:!bg-transparent
                [&>pre]:leading-relaxed
                [&>pre]:m-0
              "
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          ) : (
            /* Fallback while shiki loads */
            <pre className="p-5 text-sm leading-relaxed text-muted-foreground max-h-[480px] overflow-auto m-0">
              <code>{code.trim()}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  )
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy"}
    </button>
  )
}