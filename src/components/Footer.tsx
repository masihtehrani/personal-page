'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Mahmoud Masih Tehrani</h3>
              <p className="text-gray-300 mb-4">
                Principal Software Engineer specializing in Blockchain, FinTech, and Go development.
              </p>
              <p className="text-gray-400 text-sm">
                12+ years of experience in scalable microservice systems and distributed engineering teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#experience" className="block text-gray-300 hover:text-white transition-colors">
                  Experience
                </a>
                <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:mahmud.tehrani@gmail.com" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  mahmud.tehrani@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/mahmoudmasihtehrani/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/masihtehrani" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>by Mahmoud Masih Tehrani</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              <span>Back to Top</span>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
