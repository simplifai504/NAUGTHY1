import { Card } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  description?: string
}

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <Card className="glass-effect p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,42,175,0.2)]">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{value}</p>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </Card>
  )
}
