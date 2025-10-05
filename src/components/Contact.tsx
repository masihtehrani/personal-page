'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mahmud.tehrani@gmail.com',
      href: 'mailto:mahmud.tehrani@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahmoudmasihtehrani',
      href: 'https://www.linkedin.com/in/mahmoudmasihtehrani/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/masihtehrani',
      href: 'https://github.com/masihtehrani'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+98-919-552-6104',
      href: 'tel:+989195526104'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Iran',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities and challenging projects. 
              Let&apos;s connect and discuss how we can build something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <info.icon className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Work Together</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I&apos;m passionate about building innovative solutions and leading technical teams. 
                Whether you need a blockchain expert, a Go specialist, or a technical leader, 
                I&apos;m here to help bring your vision to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Available for new opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Open to remote work</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Interested in blockchain projects</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:mahmud.tehrani@gmail.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
                >
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Principal Software Engineer with 12+ years of experience in blockchain technology, 
                fintech solutions, and distributed systems. Expert in Go, Solidity, and microservices 
                architecture. Proven track record of leading engineering teams and delivering scalable 
                solutions for high-traffic applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
