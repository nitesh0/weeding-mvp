"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
// import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlanningServices() {
  const features = [
    "Personalized vendor recommendations",
    "Budget planning and tracking",
    "Guest list management",
    "Wedding website creation",
    "Checklist and timeline tools",
    "Direct vendor communication",
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"])
  const contentX = useTransform(scrollYProgress, [0, 1], ["10%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
      <div
        // style={{ opacity }}
        className="absolute -right-20 top-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <div
        // style={{ opacity }}
        className="absolute -left-20 bottom-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
          // style={{ y: imageY }}
          // initial={{ opacity: 0, x: -50 }}
          // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          // transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl transform-gpu">
              <div className="relative w-full h-full">
                <img
                  src="/weeding.avif?height=500&width=500"
                  alt="Wedding planning services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div
                // initial={{ y: 20, opacity: 0 }}
                // animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                // transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 p-6 text-white"
              >
                <span
                  // whileHover={{ scale: 1.05 }}
                  className="bg-rose-500 text-white text-xs font-medium px-2.5 py-1 rounded"
                >
                  Premium Service
                </span>
                <h3 className="text-2xl font-bold mt-2">Full-Service Wedding Planning</h3>
                <p className="text-white/80">Let our experts handle every detail of your special day</p>
              </div>

              <div
                // initial={{ scale: 0 }}
                // animate={isInView ? { scale: 1 } : { scale: 0 }}
                // transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-500 font-bold rounded-full px-4 py-2 shadow-lg"
              >
                Most Popular
              </div>
            </div>
          </div>

          <div
          // style={{ x: contentX }}
          // initial={{ opacity: 0, x: 50 }}
          // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          // transition={{ duration: 0.6 }}
          >
            <div
              // initial={{ scale: 0.9, opacity: 0 }}
              // animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              // transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 font-medium mb-2"
            >
              Premium Services
            </div>
            <h2 className="text-3xl font-bold mb-2">Wedding Planning Made Easy</h2>
            <p className="text-rose-500 font-medium italic mb-4">Plan the Day You'll Never Forget</p>
            <p className="text-muted-foreground mb-6">
              Our comprehensive wedding planning tools and services help you organize every aspect of your wedding day
              with ease and confidence.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  // initial={{ opacity: 0, x: 20 }}
                  // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  // transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                // whileHover={{ x: 5 }}
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mr-3"
                  // whileHover={{ scale: 1.2, backgroundColor: "#fda4af" }}
                  // transition={{ duration: 0.2 }}
                  >
                    <Check className="h-4 w-4 text-rose-500" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <div >
                <Button className="bg-rose-500 hover:bg-rose-600">Start Planning Now</Button>
              </div>
              <div>
                <Button variant="outline" className="border-rose-200 text-rose-500 hover:bg-rose-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
