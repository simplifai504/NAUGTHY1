import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface SocialCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  href: string
}

export function SocialCard({ icon: Icon, title, description, buttonText, href }: SocialCardProps) {
  return (
    <Card className="glass-effect p-6 text-center hover:scale-105 transition-transform duration-300">
      <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button className="bg-accent hover:bg-accent/90 text-white w-full" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </Button>
    </Card>
  )
}
