'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

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
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-white">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Principal Software</span>
              <span className="block text-yellow-400">Engineer</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-blue-200 mt-2">
                Blockchain & FinTech
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl"
            >
              Highly accomplished Technical Leader with over 12 years of expertise in Fintech, 
              Blockchain, E-commerce, and GIS. Expert in architecting scalable microservice systems 
              and leading distributed engineering teams.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Experience
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Card */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md w-full"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <span className="text-4xl font-bold text-white">MT</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Mahmoud Masih Tehrani
                </h3>
                <p className="text-blue-200 mb-6">
                  Principal Software Engineer
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-blue-100">
                    <Phone size={16} />
                    <span>+98-919-552-6104</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-100">
                    <Mail size={16} />
                    <span>mahmud.tehrani@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
