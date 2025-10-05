'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Server, Cpu, Shield, Globe } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      icon: Shield,
      title: 'Technical Leadership',
      color: 'from-blue-500 to-blue-600',
      skills: [
        'Team Leadership',
        'Mentoring',
        'Stakeholder Communication',
        'Sprint Planning',
        'System Design',
        'Distributed Team Management',
      ],
    },
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-green-500 to-green-600',
      skills: [
        'Golang',
        'PHP',
        'Python',
        'C/C++',
        'Solidity',
      ],
      primary: 'Golang',
    },
    {
      icon: Database,
      title: 'Databases & Caching',
      color: 'from-purple-500 to-purple-600',
      skills: [
        'PostgreSQL (PostGIS)',
        'MySQL (Percona)',
        'MariaDB',
        'Redis',
        'Elasticsearch',
        'Azure Cosmos DB',
        'LevelDB',
      ],
    },
    {
      icon: Server,
      title: 'Infrastructure & Tools',
      color: 'from-orange-500 to-orange-600',
      skills: [
        'RabbitMQ',
        'gRPC',
        'MQTT',
        'OpenResty',
        'ProxySQL',
        'LDAP',
        'SaltStack',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      icon: Cpu,
      title: 'Architecture',
      color: 'from-red-500 to-red-600',
      skills: [
        'Microservices',
        'Distributed Systems',
        'Clean Architecture',
        'SOLID',
        'Sharding',
        'Caching',
        'Event-Driven Architecture',
        'Blockchain Architecture',
      ],
    },
    {
      icon: Globe,
      title: 'Domains',
      color: 'from-teal-500 to-teal-600',
      skills: [
        'Fintech',
        'Cryptocurrency',
        'Blockchain',
        'E-commerce',
        'GIS',
        'AdTech',
        'IoT',
        'Real World Assets (RWA)',
      ],
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
    <section id="skills" className="py-20 bg-gray-50">
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
            Core Competencies
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Technical expertise and leadership skills
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}
                >
                  <category.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      skill === category.primary
                        ? 'bg-blue-100 text-blue-800 border-2 border-blue-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
