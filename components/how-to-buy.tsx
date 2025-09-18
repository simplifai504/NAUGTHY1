import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { config } from "@/lib/config"
import { Wallet, DollarSign, ArrowRightLeft, Shield } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Wallet,
    title: "Create Wallet",
    description: "Download Phantom or another Solana wallet.",
  },
  {
    number: 2,
    icon: DollarSign,
    title: "Get SOL",
    description: "Purchase SOL on a CEX and send to your wallet.",
  },
  {
    number: 3,
    icon: ArrowRightLeft,
    title: "Buy $NAUGHTY",
    description: "Use Raydium/DEX link to swap for $NAUGHTY.",
  },
]

export function HowToBuy() {
  return (
    <section id="howto" className="py-20 bg-[var(--bg-2)]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">How to Buy $NAUGHTY</h2>
          <p className="text-pink-200/80 max-w-2xl mx-auto">
            Three quick steps to join The Naughty Show community on Solana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card
                key={step.number}
                className="relative overflow-hidden glass-effect p-6 text-center hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,42,175,0.35)] group"
              >
                {/* halo */}
                <span className="pointer-events-none absolute -inset-20 rounded-[32px] bg-[conic-gradient(at_50%_50%,rgba(255,0,150,0.18),rgba(130,0,255,0.18),rgba(255,0,150,0.18))] blur-2xl opacity-0 group-hover:opacity-60 transition-opacity"></span>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full font-extrabold text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_0_3px_rgba(255,255,255,0.06)] ring-2 ring-pink-500/30">
                    {step.number}
                  </span>
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-pink-100/80">{step.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-2 py-2 rounded-full bg-black/30 border border-pink-500/20 shadow-[inset_0_0_20px_rgba(255,0,150,0.15)] mb-3">
            <Shield className="w-4 h-4 text-pink-300" />
            <span className="text-xs text-pink-200/80">Always verify contract address before buying</span>
          </div>
          <div>
            <Button size="lg" className="relative px-10 py-6 text-base bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-[0_0_30px_rgba(255,0,150,0.35)]" asChild>
              <a href={config.RAYDIUM_URL} target="_blank" rel="noopener noreferrer">
                Buy $NAUGHTY on Raydium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
