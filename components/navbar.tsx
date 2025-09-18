"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#howto", label: "How to Buy" },
  ]

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-purple-800/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-foreground">$NAUGHTY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-foreground hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="#howto">Buy Token</a>
            </Button>
            <Button variant="outline" className="border-accent/60 text-accent hover:bg-accent/10" asChild>
              <a href="https://t.me/yourCommunity" target="_blank" rel="noopener noreferrer">Join Community</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-accent hover:bg-accent/90 text-white w-fit" asChild>
                <a href="#howto">Buy Token</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
