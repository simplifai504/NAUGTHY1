"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: string
  image: string
  caption: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "/professional-fashion-portrait-woman.jpg",
    caption: "Sophia ✨",
    alt: "Professional fashion portrait of Sophia",
  },
  {
    id: "2",
    image: "/elegant-business-woman-portrait.jpg",
    caption: "Maya 💫",
    alt: "Elegant business portrait of Maya",
  },
  {
    id: "3",
    image: "/artistic-portrait-woman-web3.jpg",
    caption: "Luna 🌙",
    alt: "Artistic portrait of Luna in web3 style",
  },
  {
    id: "4",
    image: "/modern-professional-woman-portrait.jpg",
    caption: "Aria 🎵",
    alt: "Modern professional portrait of Aria",
  },
  {
    id: "5",
    image: "/creative-woman-portrait-fashion.jpg",
    caption: "Zara 🌟",
    alt: "Creative fashion portrait of Zara",
  },
  {
    id: "6",
    image: "/confident-business-woman-portrait.jpg",
    caption: "Nova 💎",
    alt: "Confident business portrait of Nova",
  },
]

export function GalleryGrid() {
  const [showAgeModal, setShowAgeModal] = useState(true)
  const [hasAccepted, setHasAccepted] = useState(false)

  const handleAccept = () => {
    setHasAccepted(true)
    setShowAgeModal(false)
    // Only access localStorage on the client
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("naughty-gallery-accepted", "true")
      } catch {}
    }
  }

  const handleCancel = () => {
    setShowAgeModal(false)
  }

  // Check localStorage on component mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const accepted = window.localStorage.getItem("naughty-gallery-accepted")
      if (accepted === "true") {
        setHasAccepted(true)
        setShowAgeModal(false)
      }
    } catch {}
  }, [])

  if (showAgeModal) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="glass-effect p-6 max-w-md w-full">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Content Notice</h3>
            <p className="text-muted-foreground mb-6">
              This gallery features SFW photos of adult models (18+). No nudity.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleAccept} className="bg-accent hover:bg-accent/90">
                Enter
              </Button>
              <Button onClick={handleCancel} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  if (!hasAccepted) {
    return null
  }

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-sm text-muted-foreground mb-8">All models are 18+. SFW only.</p>
        </div>

        {galleryItems.length === 0 ? (
          <div className="text-center text-muted-foreground">No media items found yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="glass-effect overflow-hidden group hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,42,175,0.2)]"
              >
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium">{item.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
