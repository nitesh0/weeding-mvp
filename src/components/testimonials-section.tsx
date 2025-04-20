"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
// import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul",
    date: "December 2023",
    quote:
      "We found our dream venue through Say Yes. The platform made it so easy to compare options and connect with vendors. Our wedding day was absolutely perfect!",
    rating: 5,
    image: "/couple2.jpg?height=100&width=100",
  },
  {
    id: 2,
    name: "Ananya & Vikram",
    date: "November 2023",
    quote:
      "The vendor recommendations were spot on! We saved so much time and found professionals who truly understood our vision. Couldn't have done it without Say Yes.",
    rating: 5,
    image: "/couple2.jpg?height=100&width=100",
  },
  {
    id: 3,
    name: "Meera & Arjun",
    date: "October 2023",
    quote:
      "From finding our photographer to planning the entire event timeline, Say Yes was our go-to resource. The planning tools made everything so organized!",
    rating: 5,
    image: "/couple2.jpg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div
        className="absolute -left-20 top-20 w-64 h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl"
      />
      <div
        className="absolute -right-20 bottom-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div
          className="text-center mb-12"
        >
          <div
            className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 font-medium mb-2"
          >
            Testimonials
          </div>
          <h2 className="text-3xl font-bold mb-4">What Our Couples Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read about the experiences of couples who planned their dream weddings with Say Yes
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute -top-10 -left-10 text-rose-200 opacity-50"
          >
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <div
              key={current}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 transform-gpu"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div
                    className="relative w-24 h-24 md:w-32 md:h-32 mx-auto"
                  >
                    <div className="absolute inset-0 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-rose-100">
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        // fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <div
                    className="flex justify-center md:justify-start mb-2"
                  >
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <div
                        key={i}
                      >
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      </div>
                    ))}
                  </div>
                  <blockquote
                    className="text-lg md:text-xl italic mb-4"
                  >
                    "{testimonials[current].quote}"
                  </blockquote>
                  <div
                  >
                    <p className="font-semibold text-lg">{testimonials[current].name}</p>
                    <p className="text-muted-foreground">{testimonials[current].date}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <div>
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full ${current === index ? "bg-rose-500" : "bg-gray-300"}`}

              />
            ))}

            <div >
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
