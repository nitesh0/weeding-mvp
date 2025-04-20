"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 3000], [0, -300])
  const y2 = useTransform(scrollY, [0, 3000], [0, -600])
  const y3 = useTransform(scrollY, [0, 3000], [0, -900])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute top-2/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"
      />
    </div>
  )
}
