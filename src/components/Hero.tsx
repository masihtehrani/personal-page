'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isMounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Mahmoud Masih Tehrani
              </h1>
              <div className="mb-6">
                <span className="text-2xl md:text-3xl text-gray-700 font-medium block mb-2">Principal Software Engineer</span>
                <span className="text-xl md:text-2xl text-blue-600 font-semibold">Blockchain & FinTech Solutions</span>
              </div>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Expert in distributed systems architecture, smart contract development, and technical leadership. 
                12+ years building enterprise-grade blockchain solutions and leading engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mahmoud Masih Tehrani
            </h1>
            <div className="mb-6">
              <span className="text-2xl md:text-3xl text-gray-700 font-medium block mb-2">Principal Software Engineer</span>
              <span className="text-xl md:text-2xl text-blue-600 font-semibold">Blockchain & FinTech Solutions</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert in distributed systems architecture, smart contract development, and technical leadership. 
              12+ years building enterprise-grade blockchain solutions and leading engineering teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoudmasihtehrani/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              LinkedIn Profile
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <button
              onClick={scrollToNext}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
