'use client'

import { motion } from 'framer-motion'
import { Calendar, Building, MapPin } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Principal Software Engineer',
      company: 'Blockchain & FinTech Solutions',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading blockchain development initiatives and architecting scalable microservice systems for fintech applications.',
      achievements: [
        'Led a team of 8+ engineers in developing blockchain solutions',
        'Architected microservices serving 1M+ users with 99.9% uptime',
        'Implemented Go-based trading systems with sub-millisecond latency',
        'Established CI/CD pipelines reducing deployment time by 80%'
      ],
      technologies: ['Go', 'Solidity', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Senior Software Engineer',
      company: 'FinTech Innovation Lab',
      location: 'Tehran, Iran',
      period: '2018 - 2022',
      description: 'Developed smart contracts and RESTful APIs for financial applications with focus on security and performance.',
      achievements: [
        'Developed smart contracts handling $50M+ in transactions',
        'Built RESTful APIs with Go achieving 10,000+ RPS',
        'Optimized database performance resulting in 300% improvement',
        'Implemented security protocols for financial data protection'
      ],
      technologies: ['Go', 'Solidity', 'PHP', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Tehran, Iran',
      period: '2012 - 2018',
      description: 'Full-stack development with focus on IoT, GIS systems, and team collaboration.',
      achievements: [
        'Developed full-stack applications using PHP and Python',
        'Integrated IoT devices with cloud-based systems',
        'Built GIS applications for location-based services',
        'Mentored junior developers and improved team productivity'
      ],
      technologies: ['PHP', 'Python', 'JavaScript', 'MySQL', 'Linux', 'Git']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 12 years of progressive experience in software development, 
              with a focus on blockchain technology and fintech solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Building size={20} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={20} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={20} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
