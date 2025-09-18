"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface MerchItem {
  id: string
  name: string
  price: string
  image: string
}

const merchItems: MerchItem[] = [
  {
    id: "1",
    name: "$NAUGHTY T-Shirt",
    price: "$29.99",
    image: "/naughty-crypto-t-shirt-design.jpg",
  },
  {
    id: "2",
    name: "$NAUGHTY Cap",
    price: "$24.99",
    image: "/crypto-cap-hat-design.jpg",
  },
  {
    id: "3",
    name: "$NAUGHTY Mug",
    price: "$19.99",
    image: "/crypto-coffee-mug-design.jpg",
  },
  {
    id: "4",
    name: "$NAUGHTY Gym Bag",
    price: "$39.99",
    image: "/gym-bag-sports-design.jpg",
  },
  {
    id: "5",
    name: "$NAUGHTY Hoodie",
    price: "$49.99",
    image: "/crypto-hoodie-sweatshirt-design.jpg",
  },
]

export function MerchCarousel() {
  return (
    <section id="merch" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Official $NAUGHTY Merch</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {merchItems.map((item) => (
              <Card
                key={item.id}
                className="glass-effect overflow-hidden w-64 hover:scale-105 transition-transform duration-300"
              >
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-accent font-bold text-lg">{item.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
