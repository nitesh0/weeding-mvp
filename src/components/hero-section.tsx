"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { AnimatedText } from "./animations/animated-text"

const slideImages = [
  {
    url: "/Wedding-in-udaipur.webp?height=800&width=1600",
    alt: "Beautiful wedding decoration",
  },
  {
    url: "/weedingPic1.webp?height=800&width=1600",
    alt: "Elegant wedding venue in Delhi",
  },
  {
    url: "/weeding2.avif?height=800&width=1600",
    alt: "Couple celebrating their special day",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slideImages[currentSlide].url || "/placeholder.svg"}
            alt={slideImages[currentSlide].alt}
            className="w-full h-full object-cover"
            style={{ backgroundColor: "black" }} // Ensure black during image load
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Title and UI Elements */}
      <motion.div
        style={{ y }}
        className="relative h-full container flex flex-col items-center justify-center px-4 md:px-6 text-center text-white z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatedText text="Say Yes" className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2" once={true} />
          <AnimatedText
            text="Plan the Day You'll Never Forget"
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
            once={true}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            Discover top-rated venues, photographers, makeup artists, and more for your perfect day
          </motion.p>
        </motion.div>

        {/* Search and Select */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-3xl bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg"
          whileHover={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Search for vendors, venues..." className="pl-9 bg-muted" />
            </div>
            <div className="md:w-[180px]">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="delhi-ncr">Delhi-NCR</option>
                <option value="delhi">Delhi</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="noida">Noida</option>
                <option value="faridabad">Faridabad</option>
              </select>

            </div>
            <Button className="bg-rose-500 hover:bg-rose-600">
              Search
            </Button>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // transition={{ delay: 0.6, duration: 0.1 }}
          className="flex gap-2 mt-6"
        >
          {slideImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/40"}`}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
