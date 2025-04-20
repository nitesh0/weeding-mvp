"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { MapPin, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "./ui/button"

const venues = [
  {
    id: 1,
    name: "XYZ Palace",
    location: "Chattarpur, Delhi",
    rating: 4.8,
    reviews: 245,
    price: "TBS",
    image: "/weeding_palace.jpeg?height=400&width=600",
    tags: ["5 Star", "Outdoor", "Indoor"],
  },
  {
    id: 2,
    name: "XYZ Resort",
    location: "Gurgaon, Haryana",
    rating: 4.7,
    reviews: 189,
    price: "TBS",
    image: "/weeding_resort.jpg?height=400&width=600",
    tags: ["Poolside", "Lawn", "Banquet"],
  },
  {
    id: 3,
    name: "XYZ Gardens",
    location: "Noida, UP",
    rating: 4.9,
    reviews: 312,
    price: "TBS",
    image: "/weeding-garden.webp?height=400&width=600",
    tags: ["Farmhouse", "Luxury", "Terrace"],
  },
  {
    id: 4,
    name: "XYZ Moments",
    location: "Faridabad, Haryana",
    rating: 4.6,
    reviews: 156,
    price: "TBS",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Budget", "Indoor", "Rooftop"],
  },
  {
    id: 5,
    name: "XYZ Celebrations",
    location: "South Delhi",
    rating: 4.8,
    reviews: 278,
    price: "TBS",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Heritage", "Garden", "Poolside"],
  },
]

export function FeaturedVenues() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, venues.length - (typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div
        // style={{ x, opacity }}
        className="absolute -left-20 top-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <div
        // style={{ x: useTransform(scrollYProgress, [0, 1], ["10%", "0%"]), opacity }}
        className="absolute -right-20 bottom-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div
            // initial={{ opacity: 0, x: -20 }}
            // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            // transition={{ duration: 0.5 }}
          >
            <div
              // initial={{ scale: 0.9, opacity: 0 }}
              // animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              // transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 font-medium mb-2"
            >
              Top Picks
            </div>
            <h2 className="text-3xl font-bold">Featured Wedding Venues</h2>
            <p className="text-muted-foreground">Discover the most popular wedding venues in Delhi-NCR</p>
          </div>

          <div
            // initial={{ opacity: 0, x: 20 }}
            // animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            // transition={{ duration: 0.5 }}
            className="flex gap-2"
          >
            <div >
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </div>
            <div >
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            // animate={{
            //   x: `-${(currentIndex * 100) / (venues.length / (typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1))}%`,
            // }}
            // transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6"
          >
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                // initial={{ opacity: 0, y: 20 }}
                // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                // transition={{ duration: 0.5, delay: index * 0.1 }}
                // whileHover={{
                //   y: -10,
                //   rotateY: 5,
                //   rotateX: 2,
                //   z: 50,
                //   transition: { duration: 0.3 },
                // }}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] perspective"
              >
                <Link to="#" className="block group">
                  <div
                    className="bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl transform-gpu"
                    // whileHover={{
                    //   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    // }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={venue.image || "/placeholder.svg"}
                        alt={venue.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        // initial={{ opacity: 0 }}
                        // whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300"
                      />
                      <div
                        // initial={{ opacity: 0, y: 20 }}
                        // whileHover={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-4 text-white"
                      >
                        <span className="text-sm font-medium">View Details</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-rose-500 transition-colors">
                          {venue.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{venue.rating}</span>
                          <span className="ml-1 text-xs text-muted-foreground">({venue.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{venue.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {venue.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-rose-50 text-rose-500 border-rose-200 text-xs px-2 py-1 rounded-full border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">price: {venue.price}</span>
                        <div>
                          <Button variant="ghost" size="sm" className="text-rose-500 hover:text-rose-600 p-0 h-auto">
                            View Details <ChevronRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div>
            <Link to="#" className="inline-flex items-center text-rose-500 hover:text-rose-600 font-medium">
              View all venues in Delhi-NCR
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
