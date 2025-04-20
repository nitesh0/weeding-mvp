"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Search, Menu, X, ChevronDown, Camera, MapPin, Users, Calendar, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { cn } from "../lib/utils"

interface NavItem {
  title: string
  href: string
  icon?: React.ReactNode
  children?: {
    title: string
    href: string
    description?: string
  }[]
}

const navItems: NavItem[] = [
  {
    title: "Venues",
    href: "#",
    icon: <MapPin className="h-4 w-4" />,
    children: [
      {
        title: "Banquet Halls",
        href: "#",
        description: "Elegant indoor venues for your reception",
      },
      {
        title: "Farmhouses",
        href: "#",
        description: "Spacious outdoor settings with natural beauty",
      },
      {
        title: "Hotels",
        href: "#",
        description: "Luxury accommodations with full services",
      },
      {
        title: "Destination Venues",
        href: "#",
        description: "Exotic locations for memorable celebrations",
      },
    ],
  },
  {
    title: "Vendors",
    href: "#",
    icon: <Users className="h-4 w-4" />,
    children: [
      {
        title: "Photographers",
        href: "#",
        description: "Capture your special moments forever",
      },
      {
        title: "Makeup Artists",
        href: "#",
        description: "Look your best on your big day",
      },
      {
        title: "Caterers",
        href: "#",
        description: "Delicious food for your guests",
      },
      {
        title: "Decorators",
        href: "#",
        description: "Transform your venue into a dream setting",
      },
    ],
  },
  {
    title: "Photos",
    href: "#",
    icon: <Camera className="h-4 w-4" />,
  },
  {
    title: "Real Weddings",
    href: "#",
    icon: <Heart className="h-4 w-4" />,
  },
  {
    title: "Blog",
    href: "#",
    icon: <Calendar className="h-4 w-4" />,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-elegant py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="relative">
              <Heart className="h-7 w-7 text-rose-500" fill="currentColor" />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 rounded-full bg-rose-500/20 z-[-1]"
              />
            </motion.div>
            <div>
              <motion.span
                className="text-2xl font-serif font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                Say Yes
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent"
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.children ? (
                  <DropdownMenu
                    onOpenChange={(open) => {
                      if (open) setActiveDropdown(item.title)
                      else if (activeDropdown === item.title) setActiveDropdown(null)
                    }}
                  >
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                          activeDropdown === item.title
                            ? "text-rose-500 bg-rose-50/50"
                            : "text-gray-700 hover:text-rose-500 hover:bg-rose-50/30",
                        )}
                      >
                        {item.icon && <span className="mr-1">{item.icon}</span>}
                        {item.title}
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      className="w-64 p-2 bg-white/95 backdrop-blur-md shadow-elegant rounded-xl border-none"
                    >
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.title} asChild>
                          <Link
                            to={child.href}
                            className="flex flex-col p-3 hover:bg-rose-50 rounded-md transition-colors"
                          >
                            <span className="font-medium">{child.title}</span>
                            {child.description && (
                              <span className="text-xs text-muted-foreground mt-1">{child.description}</span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50/30 transition-colors"
                  >
                    <Link to={item.href} className="flex items-center gap-1">
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.title}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search vendors..."
                className="w-[200px] pl-8 rounded-full bg-muted/50 border-none focus-visible:ring-2 focus-visible:ring-rose-500/50"
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-rose-300 text-rose-500 hover:bg-rose-50 hover:border-rose-500"
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 shadow-md hover:shadow-lg">
                <Sparkles className="h-4 w-4 mr-2" />
                Plan Wedding
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container px-4 py-4 flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search vendors..." className="w-full pl-8 rounded-full bg-muted" />
              </div>

              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <div className="border-b border-gray-100 pb-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-gray-700"
                          onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.title}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              activeDropdown === item.title ? "rotate-180" : "",
                            )}
                          />
                        </Button>

                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-1 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  to={child.href}
                                  className="block p-2 text-sm text-gray-600 hover:text-rose-500"
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start text-gray-700 border-b border-gray-100"
                      >
                        <Link to={item.href} className="flex items-center gap-2">
                          {item.icon}
                          {item.title}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1 border-rose-300 text-rose-500 hover:bg-rose-50">
                  Sign In
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Plan Wedding
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
