"use client"

import React, { useEffect, useRef } from "react"

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ as = "div", children, className = "", delayMs = 0 }: RevealProps) {
  const Comp = as as any
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    el.style.transitionDelay = `${Math.max(0, delayMs)}ms`

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show")
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delayMs])

  return (
    <Comp ref={ref} className={`fade-in ${className}`}>
      {children}
    </Comp>
  )
}
