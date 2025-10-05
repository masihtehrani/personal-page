'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, Linkedin, Github, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+98-919-552-6104',
      href: 'tel:+989195526104',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'mahmud.tehrani@gmail.com',
      href: 'mailto:mahmud.tehrani@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/mahmoudmasihtehrani',
      href: 'https://linkedin.com/in/mahmoudmasihtehrani',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/masihtehrani',
      href: 'https://github.com/masihtehrani',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Let's discuss your next project
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors duration-300"
                >
                  <contact.icon size={24} className="text-white" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {contact.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to work together?</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I'm always interested in new opportunities and challenging projects. 
                Let's connect and discuss how we can build something amazing together.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:mahmud.tehrani@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg"
                >
                  <Mail size={20} className="mr-2" />
                  Send Email
                </motion.a>
                
                <div className="flex items-center justify-center space-x-4 text-blue-100">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
