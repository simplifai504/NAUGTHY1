import { SocialCard } from "@/components/social-card"
import { config } from "@/lib/config"
import { MessageCircle, Twitter, Instagram } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function JoinCommunity() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delayMs={0}>
          <SocialCard
            icon={MessageCircle}
            title="Telegram"
            description="Join our main community chat for updates and discussions."
            buttonText="Join Telegram"
            href={config.TELEGRAM_URL}
          />
          </Reveal>
          <Reveal delayMs={100}>
          <SocialCard
            icon={Twitter}
            title="X (Twitter)"
            description="Follow us for the latest news and memes."
            buttonText="Follow on X"
            href={config.TWITTER_URL}
          />
          </Reveal>
          <Reveal delayMs={200}>
          <SocialCard
            icon={Instagram}
            title="Instagram"
            description="Check out our visual content and behind-the-scenes."
            buttonText="Follow on IG"
            href={config.INSTAGRAM_URL}
          />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
