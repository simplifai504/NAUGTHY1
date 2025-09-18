import { StatCard } from "@/components/stat-card"
import { config } from "@/lib/config"
import { ExternalLink } from "lucide-react"

export function LiveStatistics() {
  const stats = config.MOCK_STATS

  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Statistics</h2>
          <p className="text-muted-foreground">Real-time metrics from the Solana blockchain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Current Price" value={stats.price} />
          <StatCard title="Market Cap" value={stats.marketCap} description="Fully Diluted Value" />
          <StatCard title="Total Liquidity" value={stats.liquidity} />
          <StatCard title="Trading Volume" value={stats.volume24h} description="24h" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={config.DEXSCREENER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
          >
            View on Dexscreener <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={config.COINGECKO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
          >
            View on CoinGecko <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={config.CMC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
          >
            View on CMC <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
