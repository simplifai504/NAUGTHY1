"use client"

import { config } from "@/lib/config"

interface PriceTickerProps {
  className?: string
}

export function PriceTicker({ className = "" }: PriceTickerProps) {
  const stats = config.MOCK_STATS

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="glass-nav rounded-full px-4 py-2 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="text-accent font-semibold">$NAUGHTY</span>
          <span className="text-foreground">{stats.price}</span>
          <span className={`${stats.priceChange.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
            {stats.priceChange}
          </span>
          <span className="text-foreground">•</span>
          <span className="text-foreground">{config.HOLDERS_COUNT} holders</span>
        </div>
      </div>
    </div>
  )
}
