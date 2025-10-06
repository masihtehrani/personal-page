'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin, Clock, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './ContactForm'
import ClientOnly from './ClientOnly'

export default function Contact() {
  const [revealedContacts, setRevealedContacts] = useState<Set<string>>(new Set())

  const toggleReveal = (label: string) => {
    setRevealedContacts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(label)) {
        newSet.delete(label)
      } else {
        newSet.add(label)
      }
      return newSet
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Click to reveal email',
      href: '#',
      obfuscated: true,
      realValue: 'mahmud.tehrani@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahmoudmasihtehrani',
      href: 'https://www.linkedin.com/in/mahmoudmasihtehrani/',
      obfuscated: false
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/masihtehrani',
      href: 'https://github.com/masihtehrani',
      obfuscated: false
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Click to reveal phone',
      href: '#',
      obfuscated: true,
      realValue: '+98-919-552-6104'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Iran',
      href: '#',
      obfuscated: false
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities',
      href: '#',
      obfuscated: false
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
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <info.icon className="w-6 h-6 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      <div className="text-gray-600">
                        {info.obfuscated && !revealedContacts.has(info.label) 
                          ? info.value 
                          : info.obfuscated 
                            ? info.realValue
                            : info.value
                        }
                      </div>
                    </div>
                    {info.obfuscated && (
                      <button
                        onClick={() => {
                          toggleReveal(info.label)
                          if (revealedContacts.has(info.label)) {
                            // Copy to clipboard when revealed
                            navigator.clipboard.writeText(info.realValue || '')
                          }
                        }}
                        className="ml-2 p-1 text-gray-500 hover:text-blue-600 transition-colors"
                        title={revealedContacts.has(info.label) ? 'Hide contact info' : 'Reveal contact info'}
                      >
                        {revealedContacts.has(info.label) ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    )}
                    {!info.obfuscated && (
                      <a
                        href={info.href}
                        className="ml-2 p-1 text-gray-500 hover:text-blue-600 transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        →
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <ClientOnly>
              <ContactForm />
            </ClientOnly>
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
