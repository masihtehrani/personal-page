'use client'

import { motion } from 'framer-motion'
import { Code, Users, Target, Award } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '12+' },
    { icon: Users, label: 'Team Members Led', value: '8+' },
    { icon: Target, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Technologies Mastered', value: '15+' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate Principal Software Engineer with extensive experience in blockchain technology, 
              fintech solutions, and distributed systems architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 12 years of experience in software development, I have specialized in building 
                scalable blockchain solutions and fintech applications. My expertise spans across Go, 
                Solidity, and microservices architecture, with a strong focus on team leadership and 
                technical innovation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have successfully led engineering teams of 8+ developers, architected systems serving 
                over 1 million users, and implemented cutting-edge blockchain solutions for various 
                fintech companies. My passion lies in creating robust, scalable systems that drive 
                business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Blockchain Expert
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Team Leader
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  Go Specialist
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
