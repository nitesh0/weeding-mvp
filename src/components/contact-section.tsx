"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Mail, MessageSquare, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.2 })

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    }

    return (
        <section ref={ref} className="py-16 bg-white relative overflow-hidden">
            <div

                className="absolute -left-20 top-20 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl"
            />
            <div

                className="absolute -right-20 bottom-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl"
            />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div
                            className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg transform-gpu"

                        >
                            <div

                                className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500 font-medium mb-2"
                            >
                                Contact Us
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Let's Plan Your Dream Wedding</h2>
                            <p className="text-muted-foreground mb-8">
                                Have questions or need personalized assistance? Our wedding experts are here to help you plan your
                                perfect day.
                            </p>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Your Name
                                        </label>
                                        <Input id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email Address
                                        </label>
                                        <Input id="email" type="email" placeholder="Enter your email" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">
                                            Phone Number
                                        </label>
                                        <Input id="phone" placeholder="Enter your phone number" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="date" className="text-sm font-medium">
                                            Wedding Date
                                        </label>
                                        <div className="relative">
                                            <Input id="date" type="date" className="w-full" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium">
                                        What service are you looking for?
                                    </label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="venue">Wedding Venue</SelectItem>
                                            <SelectItem value="photographer">Photographer</SelectItem>
                                            <SelectItem value="catering">Catering</SelectItem>
                                            <SelectItem value="decor">Decoration</SelectItem>
                                            <SelectItem value="planning">Full Planning</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Your Message
                                    </label>
                                    <Textarea id="message" placeholder="Tell us about your wedding plans and requirements" rows={4} />
                                </div>

                                <div>
                                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Send Message</Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div

                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Why Choose Say Yes?</h3>
                                <ul className="space-y-4">
                                    <li

                                        className="flex gap-4"

                                    >
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center"

                                        >
                                            <Calendar className="h-6 w-6 text-rose-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">10+ Years of Experience</h4>
                                            <p className="text-muted-foreground">Helping couples plan their dream weddings since 2014</p>
                                        </div>
                                    </li>
                                    <li

                                        className="flex gap-4"

                                    >
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center"

                                        >
                                            <MessageSquare className="h-6 w-6 text-rose-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">5000+ Verified Vendors</h4>
                                            <p className="text-muted-foreground">Curated selection of top-rated wedding professionals</p>
                                        </div>
                                    </li>
                                    <li

                                        className="flex gap-4"

                                    >
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center"

                                        >
                                            <Mail className="h-6 w-6 text-rose-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Free Planning Tools</h4>
                                            <p className="text-muted-foreground">
                                                Comprehensive resources to make wedding planning stress-free
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div

                                className="bg-gray-100 p-6 rounded-xl"

                            >
                                <h4 className="font-medium mb-2">Contact Information</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3" >
                                        <Phone className="h-5 w-5 text-rose-500" />
                                        <span>+91 999999999</span>
                                    </div>
                                    <div className="flex items-center gap-3" >
                                        <Mail className="h-5 w-5 text-rose-500" />
                                        <span>contact@sayyesweddings.com</span>
                                    </div>
                                    <div className="flex items-center gap-3" >
                                        <MapPin className="h-5 w-5 text-rose-500" />
                                        <span>Delhi-NCR, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
