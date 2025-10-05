'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mahmoudmasihtehrani',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/masihtehrani',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:mahmud.tehrani@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+989195526104',
      label: 'Phone',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Mahmoud Masih Tehrani
            </h3>
            <p className="text-gray-400 mb-4">
              Principal Software Engineer
            </p>
            <p className="text-sm text-gray-500">
              Blockchain & FinTech Expert
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mahmoud Masih Tehrani
            </p>
            <p className="text-gray-500 text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </motion.div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
