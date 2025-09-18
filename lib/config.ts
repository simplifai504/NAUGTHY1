// Configuration for $NAUGHTY token and links
export const config = {
  // Token Information
  TOKEN_ADDRESS: "PLACEHOLDER_TOKEN_ADDRESS",
  HOLDERS_COUNT: "12,847",

  // External Links
  RAYDIUM_URL: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=PLACEHOLDER_TOKEN_ADDRESS",
  TELEGRAM_URL: "https://t.me/PLACEHOLDER_TELEGRAM",
  TWITTER_URL: "https://twitter.com/PLACEHOLDER_TWITTER",
  INSTAGRAM_URL: "https://instagram.com/PLACEHOLDER_INSTAGRAM",
  DEXSCREENER_URL: "https://dexscreener.com/solana/PLACEHOLDER_TOKEN_ADDRESS",
  COINGECKO_URL: "https://coingecko.com/en/coins/PLACEHOLDER_TOKEN",
  CMC_URL: "https://coinmarketcap.com/currencies/PLACEHOLDER_TOKEN",

  // Optional: path to a custom flywheel image placed under /public
  // e.g., "/naughty-flywheel.png" (leave empty to use the default SVG)
  FLYWHEEL_IMAGE: "/naughty-flywheel.png",

  // Mock Token Stats (replace with API later)
  MOCK_STATS: {
    price: "$0.000042",
    marketCap: "$2.1M",
    liquidity: "$847K",
    volume24h: "$156K",
    priceChange: "+12.5%",
  },
}

// Utility function to get token stats (mock for now)
export function getTokenStats() {
  return config.MOCK_STATS
}
