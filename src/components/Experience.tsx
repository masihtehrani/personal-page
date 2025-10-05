'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Principal Software Engineer',
      company: 'Blockchain & FinTech Staff Technical Lead',
      period: 'Current',
      description: 'Leading technical strategy and architecture for blockchain and fintech solutions. Managing distributed engineering teams and driving innovation in cryptocurrency and IoT systems.',
      technologies: ['Golang', 'Blockchain', 'Microservices', 'Team Leadership'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'Microservices & Distributed Systems',
      period: 'Previous',
      description: 'Architected and developed scalable microservice systems using Go, PHP, and Python. Implemented event-driven architectures and distributed caching solutions.',
      technologies: ['Go', 'PHP', 'Python', 'Docker', 'Kubernetes'],
    },
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-white">
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
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Building scalable systems and leading teams
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <Building size={20} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={20} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
