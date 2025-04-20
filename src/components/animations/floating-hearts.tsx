"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface FloatingHeartsProps {
  count?: number
}

export function FloatingHearts({ count = 10 }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; size: number; duration: number }[]>([])

  useEffect(() => {
    const newHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 20 + 15,
    }))
    setHearts(newHearts)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{ left: `${heart.x}%` }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "-100%",
            opacity: [0, 1, 0],
            x: [0, Math.sin(heart.id) * 100, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          <Heart className="text-rose-300" style={{ width: heart.size, height: heart.size }} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}
