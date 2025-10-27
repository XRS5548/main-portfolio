'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'CodSoft',
    role: 'Web Developer Intern',
    duration: 'July 2025 – July 2025 (Remote)',
    details: [
      'Developed two full-stack web apps using Next.js, React, and MongoDB.',
      'Created HiQuizz – a dynamic quiz app with authentication and interactive UI.',
      'Built Job Boss – a job listing platform with filtering and application management.',
      'Implemented responsive UI using shadcn/ui and Hero UI.',
      'Used Git and GitHub for version control and collaborative development.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Work Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto border-l border-white/10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-10 pb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
              <Briefcase size={14} className="text-white" />
            </div>

            {/* Card Content */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-2">{exp.company} • {exp.duration}</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
