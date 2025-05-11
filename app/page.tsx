"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight, Heart, Activity, Stethoscope } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl text-teal-600">getwellcheck</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Home
            </a>
            <a href="#objectives" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Key Objectives
            </a>
            <a href="#recommendations" className="text-sm font-medium hover:text-teal-600 transition-colors">
              EMR Solutions
            </a>
            <a href="#partners" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Partners
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Benefits
            </a>
            <Button variant="outline" className="rounded-full">
              Contact Us
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Medical Animation */}
        <section
          id="home"
          ref={heroRef}
          className="relative bg-gradient-to-r from-teal-500 to-emerald-700 text-white overflow-hidden"
        >
          <div className="container py-20 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">National Digital Health Policy</h1>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl mb-8 opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Transforming healthcare through digital innovation for better patient outcomes and system efficiency
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button className="bg-white text-teal-700 hover:bg-gray-100">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Medical Animation Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-white/10 rounded-full blur-3xl"></div>

            {/* Heartbeat Line Animation */}
            <motion.div
              className="absolute bottom-10 left-0 right-0 h-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <svg width="100%" height="100" viewBox="0 0 1200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M0,50 L200,50 L230,20 L260,80 L290,50 L320,50 L350,20 L380,80 L410,50 L1200,50"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="1200"
                  initial={{ strokeDashoffset: 1200 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>

            {/* Floating Medical Icons */}
            <motion.div
              className="absolute top-20 right-20"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-40 left-20"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white/20 p-4 rounded-full">
                <Activity className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-40 right-40"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white/20 p-4 rounded-full">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            {/* Digital Particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Key Objectives Section */}
        <section id="objectives" className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <svg width="100%" height="100%" className="absolute opacity-5">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Objectives</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive approach to digital health transformation focuses on these key strategic objectives
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Objective 1 */}
              <motion.div
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(240, 253, 250, 1)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M16 16v-8"></path>
                    <path d="M12 16v-3"></path>
                    <path d="M8 16v-5"></path>
                    <path d="M3 8l3-3 3 3"></path>
                    <path d="M21 8l-3-3-3 3"></path>
                    <rect width="18" height="12" x="3" y="8" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Connected Health System</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Improve digital health infrastructure to establish an integrated and automated health ecosystem with
                  accessible, seamless services.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>

              {/* Objective 2 */}
              <motion.div
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(240, 253, 250, 1)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Data & Analytics</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Dashboards for leadership to monitor health metrics and leverage big data and AI to improve public
                  health policies.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>

              {/* Objective 3 */}
              <motion.div
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(240, 253, 250, 1)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Health Financing</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Optimizing healthcare spending, streamlining claims processing, and ensuring sustainable funding
                  models.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>

              {/* Objective 4 */}
              <motion.div
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(240, 253, 250, 1)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="m8 6 4-4 4 4"></path>
                    <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
                    <path d="m20 22-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Supply Chain Management</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Ensuring the availability of essential medicines and improving logistics for medical supplies.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>

              {/* Objective 5 */}
              <motion.div
                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(240, 253, 250, 1)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:bg-teal-100"></div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95"></path>
                    <path d="M3.69 8.56A9 9 0 0 0 3 12"></path>
                    <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                    <path d="M8.56 20.31A9 9 0 0 0 12 21"></path>
                    <path d="M15.44 20.31a9 9 0 0 0 2.92-1.95"></path>
                    <path d="M20.31 15.44A9 9 0 0 0 21 12"></path>
                    <path d="M20.31 8.56a9 9 0 0 0-1.95-2.92"></path>
                    <path d="M15.44 3.69A9 9 0 0 0 12 3"></path>
                    <path d="M12 12v-2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">Emergency Preparedness</h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  Digitalization of medical records enables resilience to fight against pandemics and public health
                  emergencies.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Redesigned EMR Recommendations Section */}
        <section id="recommendations" className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
            <div className="absolute -left-32 top-1/4 w-64 h-64 bg-teal-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -right-32 bottom-1/4 w-64 h-64 bg-emerald-50 rounded-full opacity-70 blur-3xl"></div>

            {/* DNA Helix Animation */}
            <svg
              className="absolute right-0 h-full w-1/3 opacity-5"
              viewBox="0 0 200 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M100,0 C150,100 50,200 100,300 C150,400 50,500 100,600 C150,700 50,800 100,900"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.path
                d="M100,0 C50,100 150,200 100,300 C50,400 150,500 100,600 C50,700 150,800 100,900"
                fill="none"
                stroke="#0d9488"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              />

              {/* DNA Rungs */}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.line
                  key={i}
                  x1="50"
                  y1={90 * i + 50}
                  x2="150"
                  y2={90 * i + 50}
                  stroke="#0d9488"
                  strokeWidth="2"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.5 }}
                  transition={{
                    duration: 1,
                    delay: 1 + i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 5,
                  }}
                />
              ))}
            </svg>
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Next-Generation EMR Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Not all EMRs are made equal. We partner with Microsoft, Via Nova, Care Matics, and Eclinic Works to
                provide cutting-edge healthcare solutions with proven technology and global support.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <motion.div
                className="lg:col-span-5 space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-teal-500 to-emerald-600 p-1 rounded-2xl">
                  <div className="bg-white p-6 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-50 p-3 rounded-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-teal-600"
                        >
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                          <path d="M18 14h-8"></path>
                          <path d="M15 18h-5"></path>
                          <path d="M10 6h8v4h-8V6Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Unified Patient Records</h3>
                        <p className="text-gray-600">
                          A centralized record accessible nationwide, ensuring seamless information sharing across all
                          care providers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Voice Enabled EMR</h3>
                      <p className="text-gray-600">
                        AI-powered ambient listening enables real-time capture of patient-doctor encounters, reducing
                        administrative burden.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                        <line x1="12" x2="12.01" y1="18" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Patient Engagement via Mobile</h3>
                      <p className="text-gray-600">
                        Patients can access their health records, lab results, and visit summaries anytime through
                        intuitive mobile apps.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M3 3v18h18"></path>
                        <path d="m19 9-5 5-4-4-3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Robust Analytics</h3>
                      <p className="text-gray-600">
                        Data insights into population health metrics, enabling data-driven healthcare policy decisions
                        at hospital and national levels.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="EMR Dashboard"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />

                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Modern EMR Interface</h3>
                        <p className="opacity-90 max-w-md">
                          Intuitive design for healthcare professionals with real-time data visualization and
                          AI-assisted decision support
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Activity className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Heart Rate</div>
                        <div className="font-bold">72 BPM</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-teal-100 p-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-teal-600"
                        >
                          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Blood Pressure</div>
                        <div className="font-bold">120/80</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners & Solutions Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-32 top-1/4 w-64 h-64 bg-teal-50 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -left-32 bottom-1/4 w-64 h-64 bg-emerald-50 rounded-full opacity-70 blur-3xl"></div>

            {/* Grid Pattern */}
            <svg width="100%" height="100%" className="absolute opacity-5">
              <pattern id="partners-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#partners-grid)" />
            </svg>
          </div>

          <div className="container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Healthcare Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with industry-leading healthcare technology providers to deliver comprehensive, integrated
                solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Microsoft Healthcare Solutions */}
              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#f3f2f1] p-3 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23">
                        <path fill="#f25022" d="M0 0h10.7v10.7H0z" />
                        <path fill="#00a4ef" d="M0 12h10.7v10.7H0z" />
                        <path fill="#7fba00" d="M12 0h10.7v10.7H12z" />
                        <path fill="#ffb900" d="M12 12h10.7v10.7H12z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Microsoft Healthcare</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Microsoft Cloud for Healthcare accelerates your ability to deliver better experiences, insights, and
                    care. It brings together capabilities from Microsoft Azure, Microsoft 365, Microsoft Dynamics 365,
                    and Microsoft Power Platform.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Azure Health Data Services</h4>
                      <p className="text-sm text-gray-600">
                        Unified health data management with FHIR® and DICOM services
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Healthcare AI</h4>
                      <p className="text-sm text-gray-600">Advanced analytics and AI models for healthcare insights</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Via Nova */}
              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M2 22h20"></path>
                        <path d="M6.87 2h10.26a2 2 0 0 1 1.98 1.78l.9 12.22H4l.9-12.22A2 2 0 0 1 6.87 2z"></path>
                        <path d="M2 10h20"></path>
                        <path d="M12 2v8"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Via Nova</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Via Nova delivers innovative healthcare solutions that streamline clinical workflows and improve
                    patient outcomes. Their comprehensive suite of tools enables healthcare providers to deliver more
                    efficient and effective care.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Clinical Workflows</h4>
                      <p className="text-sm text-gray-600">Optimized processes for healthcare delivery</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Patient Management</h4>
                      <p className="text-sm text-gray-600">Comprehensive tools for patient care coordination</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Care Matics */}
              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-600"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Care Matics</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Care Matics specializes in advanced healthcare automation and patient monitoring systems. Their
                    solutions help healthcare providers deliver personalized care while optimizing resource allocation
                    and improving operational efficiency.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Remote Monitoring</h4>
                      <p className="text-sm text-gray-600">Real-time patient monitoring and alerts</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Care Automation</h4>
                      <p className="text-sm text-gray-600">Streamlined care delivery and documentation</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Eclinic Works */}
              <motion.div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Eclinic Works</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Eclinic Works provides comprehensive digital solutions for virtual healthcare delivery. Their
                    platform enables seamless telehealth consultations, online appointment scheduling, and digital
                    health record management.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Telehealth Platform</h4>
                      <p className="text-sm text-gray-600">Secure video consultations and remote care</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Digital Scheduling</h4>
                      <p className="text-sm text-gray-600">Automated appointment booking and reminders</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Explore All Solutions</Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-teal-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Implementation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deploying a cutting-edge EMR improves efficiency, reduces clinician burnout, enhances patient
                satisfaction, and supports financial sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Improved Efficiency</h3>
                <p className="text-gray-600 text-sm">Streamlined workflows and reduced administrative burden</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Better Patient Care</h3>
                <p className="text-gray-600 text-sm">Enhanced patient outcomes through data-driven decisions</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">Financial sustainability through optimized resource allocation</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Data Security</h3>
                <p className="text-gray-600 text-sm">High standards of security and digital compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join us in revolutionizing healthcare delivery through digital innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-teal-700 hover:bg-gray-100">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-white mb-4">getwellcheck</div>
              <p className="text-sm opacity-70">
                Transforming healthcare through digital innovation for better patient outcomes and system efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Quick Links</h3>

              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-teal-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#objectives" className="hover:text-teal-400 transition-colors">
                    Key Objectives
                  </a>
                </li>
                <li>
                  <a href="#recommendations" className="hover:text-teal-400 transition-colors">
                    EMR Solutions
                  </a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-teal-400 transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-teal-400 transition-colors">
                    Benefits
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    White Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>info@getwellcheck.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Tripoli, Libya</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center opacity-70">
            <p>© 2025 getwellcheck. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
