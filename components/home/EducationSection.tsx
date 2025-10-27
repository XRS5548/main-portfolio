'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    branch: 'Computer Science & Engineering',
    college: 'Compucom Institute of Technology & Management, Jaipur',
    duration: '2021 – 2025',
    highlights: [
      'Key coursework: DSA, OS, DBMS, Computer Networks, AI, Web & Mobile Development.',
      'Participated in Smart India Hackathon 2024.',
      'Built multiple real-world projects using React, PHP, Flutter, and Node.js.',
    ],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Education
      </motion.h2>

      <div className="relative max-w-4xl mx-auto border-l border-white/10">
        {education.map((edu, index) => (
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
              <GraduationCap size={14} className="text-white" />
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-gray-300 text-sm mb-1">{edu.branch}</p>
              <p className="text-gray-400 text-sm mb-3">{edu.college} • {edu.duration}</p>

              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                {edu.highlights.map((point, i) => (
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
