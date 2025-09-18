import { Reveal } from "@/components/reveal"
import { Sparkles, Radio, Coins, Users, Megaphone } from "lucide-react"
import Image from "next/image"
import { config } from "@/lib/config"

export function AboutMission() {
  return (
    <section id="about" className="py-20 bg-[var(--bg-2)]/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-flex items-center justify-center gap-3">
              <Sparkles className="w-7 h-7 text-accent animate-bounce" /> About the Project
            </h2>
          </Reveal>

          <div className="space-y-4 text-lg text-pink-200/90 mb-8">
            <Reveal as="p">Daily hot‑tub style streams with rotating models and guests.</Reveal>
            <Reveal as="p">Every show brings visibility and momentum to our token.</Reveal>
            <Reveal as="p">Fees are reinvested to produce bigger shows and grow community.</Reveal>
          </div>

          {/* Flywheel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Optional external image provided by user */}
            {config.FLYWHEEL_IMAGE ? (
              <div className="relative w-full aspect-[16/9] md:aspect-[10/5]">
                <Image
                  src={config.FLYWHEEL_IMAGE}
                  alt="Naughty flywheel"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(255,0,150,0.35)]"
                  priority
                />
              </div>
            ) : (
              <div className="relative mx-auto w-full max-w-3xl">
                {/* Arrows and halo svg */}
                <svg viewBox="0 0 600 600" className="w-full h-auto">
                  <defs>
                    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,0,150,0.55)" />
                      <stop offset="100%" stopColor="rgba(130,0,255,0.15)" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <ellipse cx="300" cy="300" rx="260" ry="200" fill="url(#halo)" opacity="0.35" />
                  <g stroke="#ff4fcf" strokeWidth="3" fill="none" opacity="0.7">
                    <path d="M150,200 C260,80 460,80 510,220" />
                    <path d="M510,220 C560,320 480,440 360,470" />
                    <path d="M360,470 C250,500 160,460 120,360" />
                    <path d="M120,360 C90,280 110,230 150,200" />
                  </g>
                </svg>

                {/* HTML overlay capsules for better responsiveness */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-[16%] top-[33%]">
                    <Capsule icon={<Radio className="w-4 h-4 text-pink-300" />} label="Show" />
                  </div>
                  <div className="absolute left-[68%] top-[35%] -translate-x-1/2">
                    <Capsule icon={<Coins className="w-4 h-4 text-pink-300" />} label="Token Launch" />
                  </div>
                  <div className="absolute left-[60%] top-[76%] -translate-x-1/2">
                    <Capsule icon={<Users className="w-4 h-4 text-pink-300" />} label="Community Growth" />
                  </div>
                  <div className="absolute left-[18%] top-[68%]">
                    <Capsule icon={<Megaphone className="w-4 h-4 text-pink-300" />} label="More Exposition" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-pink-200/80 text-sm max-w-3xl mx-auto">
            This flywheel shows how revenue and visibility cycle back into new shows to expand the community and sustain growth.
          </p>
        </div>
      </div>
    </section>
  )
}

function Capsule({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="pointer-events-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-pink-500/40 backdrop-blur-sm text-pink-100 text-xs md:text-sm shadow-[0_0_20px_rgba(255,0,150,0.25)]">
      <span className="inline-block align-middle">{icon}</span>
      <span>{label}</span>
    </div>
  )
}
