"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import { MessageCircle, ShoppingCart } from "lucide-react"

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

// Countdown to 21:00 America/Lima each day
function useLimaCountdown() {
  const [time, setTime] = useState<{ h: string; m: string; s: string }>({ h: "--", m: "--", s: "--" })

  useEffect(() => {
    // Build a Date from Intl parts for a specific timezone
    const partsToDate = (parts: Intl.DateTimeFormatPart[]) => {
      const get = (t: string) => parts.find((p) => p.type === t)?.value
      const y = Number(get("year"))
      const mo = Number(get("month")) - 1
      const d = Number(get("day"))
      const h = Number(get("hour"))
      const mi = Number(get("minute"))
      const s = Number(get("second"))
      // Treat as UTC components to avoid local TZ skew
      return new Date(Date.UTC(y, mo, d, h, mi, s))
    }

    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Lima",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    const tick = () => {
      const nowParts = fmt.formatToParts(new Date())
      const nowLima = partsToDate(nowParts)
      // Target today 21:00 Lima
      const y = Number(nowParts.find((p) => p.type === "year")?.value)
      const mo = Number(nowParts.find((p) => p.type === "month")?.value)
      const d = Number(nowParts.find((p) => p.type === "day")?.value)
      const targetLimaUTC = new Date(Date.UTC(y, mo - 1, d, 21, 0, 0))

      let diff = targetLimaUTC.getTime() - nowLima.getTime()
      if (diff <= 0) {
        // Tomorrow 21:00 Lima
        const tomorrow = new Date(Date.UTC(y, mo - 1, d, 21, 0, 0))
        tomorrow.setUTCDate(tomorrow.getUTCDate() + 1)
        diff = tomorrow.getTime() - nowLima.getTime()
      }

      const hours = Math.floor(diff / 3_600_000)
      const minutes = Math.floor((diff % 3_600_000) / 60_000)
      const seconds = Math.floor((diff % 60_000) / 1000)
      setTime({ h: pad(hours), m: pad(minutes), s: pad(seconds) })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function HeroSection() {
  const t = useLimaCountdown()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-hero-bg animate-[bgMove_12s_linear_infinite]" />
        {/* Sparkles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full sparkle" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent/50 rounded-full sparkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full sparkle" style={{ animationDelay: "0.5s" }} />

        {/* Floating emojis */}
        <div className="absolute left-10 top-10 text-pink-500/70 text-3xl select-none sparkle" aria-hidden>
          💗
        </div>
        <div className="absolute right-16 top-24 text-fuchsia-400/70 text-2xl select-none sparkle" style={{ animationDelay: "0.8s" }} aria-hidden>
          ✨
        </div>
        <div className="absolute left-1/3 bottom-12 text-pink-600/60 text-4xl select-none sparkle" style={{ animationDelay: "1.2s" }} aria-hidden>
          💖
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pink-400 drop-shadow-xl">
            The Naughty Show – <span className="text-pink-500">The First Token-Powered Daily Stream on PumpFun</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-pink-200">
            Join the show, fuel the token, grow the community.
          </p>

          <div className="mt-6 inline-flex items-center justify-center">
            <div
              className="text-2xl font-mono text-pink-300 px-4 py-2 bg-black/30 rounded-lg backdrop-blur-sm border border-white/10"
              aria-live="polite"
            >
              {t.h}:{t.m}:{t.s}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="relative bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg shadow-lg"
              asChild
            >
              <a href={config.RAYDIUM_URL} target="_blank" rel="noopener noreferrer">
                <span className="absolute -inset-0.5 bg-pink-500/40 blur-md rounded-xl animate-pulse" aria-hidden />
                <span className="relative flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Buy $NAUGHTY
                </span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="relative border-pink-500 text-pink-200 hover:bg-pink-500 hover:text-white px-8 py-3 text-lg bg-transparent shadow-lg"
              asChild
            >
              <a href={config.TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                <span className="absolute -inset-0.5 rounded-xl bg-pink-500/20 blur animate-[glow_2s_ease-in-out_infinite]" aria-hidden />
                <span className="relative flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" /> Join Telegram
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
