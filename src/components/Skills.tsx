'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Zap, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Go', level: 95, description: 'Expert level with 8+ years experience' },
        { name: 'Solidity', level: 90, description: 'Smart contract development specialist' },
        { name: 'PHP', level: 85, description: 'Full-stack web development' },
        { name: 'Python', level: 80, description: 'Data processing and automation' },
        { name: 'JavaScript', level: 75, description: 'Frontend and Node.js development' }
      ]
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90, description: 'Primary database for production systems' },
        { name: 'Redis', level: 85, description: 'Caching and session management' },
        { name: 'MongoDB', level: 70, description: 'Document-based data storage' },
        { name: 'MySQL', level: 80, description: 'Relational database management' }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', level: 90, description: 'Containerization and orchestration' },
        { name: 'Kubernetes', level: 85, description: 'Container orchestration platform' },
        { name: 'Linux', level: 90, description: 'System administration and scripting' },
        { name: 'Git', level: 95, description: 'Version control and collaboration' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Blockchain',
      skills: [
        { name: 'Smart Contracts', level: 90, description: 'Ethereum and EVM-compatible chains' },
        { name: 'Web3', level: 85, description: 'Decentralized application development' },
        { name: 'Cryptography', level: 80, description: 'Security protocols and encryption' },
        { name: 'API Security', level: 85, description: 'RESTful API protection' }
      ]
    },
    {
      icon: Zap,
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Gin/Echo', level: 90, description: 'Go web frameworks' },
        { name: 'Laravel', level: 80, description: 'PHP framework for web applications' },
        { name: 'Django', level: 75, description: 'Python web framework' },
        { name: 'React', level: 70, description: 'Frontend development' }
      ]
    },
    {
      icon: Users,
      title: 'Leadership & Soft Skills',
      skills: [
        { name: 'Team Leadership', level: 90, description: 'Leading engineering teams of 8+ developers' },
        { name: 'Technical Architecture', level: 95, description: 'System design and scalability planning' },
        { name: 'Mentoring', level: 85, description: 'Guiding junior developers' },
        { name: 'Project Management', level: 80, description: 'Agile methodologies and delivery' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across multiple technology stacks, 
              with deep specialization in blockchain and backend development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="cursor-pointer"
                      onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                    >
                      <div className="flex justify-between items-center mb-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                          {expandedSkill === skill.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ height: expandedSkill === skill.name ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 mt-2 p-2 bg-blue-50 rounded">{skill.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                  <div className="text-gray-600">Team Members Led</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
