
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { Camera, Music, Utensils, Palette, Shirt, Gift, Users, Calendar } from "lucide-react"

const categories = [
  {
    name: "Venues",
    icon: <Calendar className="h-6 w-6" />,
    description: "Banquet Halls, Farmhouses, Hotels",
    color: "bg-pink-100",
    hoverColor: "hover:bg-pink-200",
  },
  {
    name: "Photographers",
    icon: <Camera className="h-6 w-6" />,
    description: "Pre-wedding, Wedding day, Albums",
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-200",
  },
  {
    name: "Catering",
    icon: <Utensils className="h-6 w-6" />,
    description: "Multi-cuisine, Thematic, Desserts",
    color: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-200",
  },
  {
    name: "Decorators",
    icon: <Palette className="h-6 w-6" />,
    description: "Floral, Thematic, Lighting",
    color: "bg-green-100",
    hoverColor: "hover:bg-green-200",
  },
  {
    name: "Bridal Wear",
    icon: <Shirt className="h-6 w-6" />,
    description: "Designer, Traditional, Contemporary",
    color: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
  },
  {
    name: "Music & DJ",
    icon: <Music className="h-6 w-6" />,
    description: "DJs, Bands, Classical",
    color: "bg-red-100",
    hoverColor: "hover:bg-red-200",
  },
  {
    name: "Gifts & Favors",
    icon: <Gift className="h-6 w-6" />,
    description: "Customized, Traditional, Luxury",
    color: "bg-indigo-100",
    hoverColor: "hover:bg-indigo-200",
  },
  {
    name: "Planners",
    icon: <Users className="h-6 w-6" />,
    description: "Full service, Day-of coordination",
    color: "bg-orange-100",
    hoverColor: "hover:bg-orange-200",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function VendorCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

      <div ref={ref} className="container px-4 md:px-6 relative z-10">
        <div
          // initial={{ opacity: 0, y: 20 }}
          // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          // transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div
            // initial={{ scale: 0.9, opacity: 0 }}
            // animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 font-medium mb-2"
          >
            Explore Services
          </div>
          <h2
            // initial={{ opacity: 0, y: 20 }}
            // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            // transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Find the Perfect Wedding Vendors
          </h2>
          <p
            // initial={{ opacity: 0, y: 20 }}
            // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            // transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Browse through our curated selection of top-rated wedding vendors in Delhi-NCR to make your special day
            perfect
          </p>
        </div>

        <div
          // variants={containerVariants}
          // initial="hidden"
          // animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              // variants={itemVariants}
              // whileHover={{
              //   y: -10,
              //   transition: { duration: 0.2 },
              //   rotateY: 5,
              //   rotateX: 5,
              //   z: 50,
              // }}
              className="group perspective"
            >
              <Link to="#" className="block transform-gpu">
                <div
                  className={`rounded-xl p-6 text-center ${category.color} ${category.hoverColor} transition-all duration-300 group-hover:shadow-xl transform-gpu`}
                  // whileHover={{
                  //   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  // }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white text-rose-500 shadow-md"
                    // whileHover={{
                    //   rotate: [0, -10, 10, -10, 0],
                    //   transition: { duration: 0.5 },
                    // }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-rose-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
