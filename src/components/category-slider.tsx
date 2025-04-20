"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface Category {
  id: number
  name: string
  image: string
  count: number
  featured?: boolean
}

const categories: Category[] = [
  {
    id: 1,
    name: "Wedding Venues",
    image: "/placeholder.svg?height=300&width=400",
    count: 245,
    featured: true,
  },
  {
    id: 2,
    name: "Photographers",
    image: "/placeholder.svg?height=300&width=400",
    count: 189,
  },
  {
    id: 3,
    name: "Makeup Artists",
    image: "/placeholder.svg?height=300&width=400",
    count: 312,
    featured: true,
  },
  {
    id: 4,
    name: "Wedding Planners",
    image: "/placeholder.svg?height=300&width=400",
    count: 156,
  },
  {
    id: 5,
    name: "Bridal Wear",
    image: "/placeholder.svg?height=300&width=400",
    count: 278,
    featured: true,
  },
  {
    id: 6,
    name: "Catering",
    image: "/placeholder.svg?height=300&width=400",
    count: 203,
  },
  {
    id: 7,
    name: "Decorators",
    image: "/placeholder.svg?height=300&width=400",
    count: 167,
  },
  {
    id: 8,
    name: "Music & DJs",
    image: "/placeholder.svg?height=300&width=400",
    count: 142,
  },
]

export function CategorySlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.75
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })

      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      }
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.75
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      if (activeIndex < categories.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    }
  }

  return (
    <div className="relative py-8 bg-elegant-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(#fda4af_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent decorative-line">
              Explore Categories
            </h2>
            <p className="text-muted-foreground mt-2">Find the perfect vendors for your special day</p>
          </div>

          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={slideLeft}
                className="rounded-full border-rose-200 hover:border-rose-400 hover:bg-rose-50"
                aria-label="Previous categories"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={slideRight}
                className="rounded-full border-rose-200 hover:border-rose-400 hover:bg-rose-50"
                aria-label="Next categories"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] snap-start"
            >
              <Link to="#" className="block group">
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="relative h-52 rounded-xl overflow-hidden shadow-elegant"
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {category.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                    <h3 className="text-xl font-serif font-semibold group-hover:text-rose-200 transition-colors">
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-white/80">{category.count} vendors</p>
                      <motion.span
                        className="text-xs font-medium text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        Explore →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                Math.abs(activeIndex - index) <= 1 ? "bg-gradient-to-r from-rose-500 to-rose-400 w-6" : "bg-gray-300",
              )}
              aria-label={`Go to category group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
