"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"

interface WavyGridProps {
  squareSize?: number
  gridGap?: number
  maxOpacity?: number
}

export default function WavyGridBackground({
  squareSize = 4,
  gridGap = 2,
  maxOpacity = 0.25,
}: WavyGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = 180
      const progress = Math.min(window.scrollY / fadeDistance, 1)

      const visible = 18 - progress * 18
      const fade = 55 - progress * 55

      const mask = `linear-gradient(to bottom, black 0%, black ${visible}%, transparent ${fade}%)`

      if (gridRef.current) {
        gridRef.current.style.maskImage = mask
        gridRef.current.style.webkitMaskImage = mask
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      const cols = Math.ceil(width / (squareSize + gridGap))
      const rows = Math.ceil(height / (squareSize + gridGap))

      return { cols, rows, dpr }
    },
    [squareSize, gridGap]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let gridParams: ReturnType<typeof setupCanvas>

    const updateCanvasSize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      setCanvasSize({ width, height })
      gridParams = setupCanvas(canvas, width, height)
    }

    updateCanvasSize()

    const resizeObserver = new ResizeObserver(updateCanvasSize)
    resizeObserver.observe(container)

    const animate = (time: number) => {
      const t = time * 0.001

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "lighter"

      const themeColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim()

      ctx.fillStyle = themeColor

      for (let i = 0; i < gridParams.cols; i++) {
        for (let j = 0; j < gridParams.rows; j++) {
          const wave =
            (Math.sin(i * 0.4 + t) +
              Math.sin(j * 0.3 + t * 1.2) +
              Math.sin((i + j) * 0.2 + t * 0.8)) /
            3

          const opacity = ((wave + 1) / 2) * maxOpacity
          ctx.globalAlpha = opacity

          ctx.fillRect(
            i * (squareSize + gridGap) * gridParams.dpr,
            j * (squareSize + gridGap) * gridParams.dpr,
            squareSize * gridParams.dpr,
            squareSize * gridParams.dpr
          )
        }
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [setupCanvas, squareSize, gridGap, maxOpacity])

  return (
    <div
      ref={gridRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "var(--background)",
        backgroundImage: `
          linear-gradient(to right, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 18%, transparent 65%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 18%, transparent 65%)",
      }}
    >
      <div ref={containerRef} className="h-full w-full">
        <canvas
          ref={canvasRef}
          style={{
            width: canvasSize.width,
            height: canvasSize.height,
          }}
        />
      </div>
    </div>
  )
}