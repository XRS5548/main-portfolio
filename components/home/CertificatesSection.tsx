'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certificates = [
  {
    title: 'Learn Advanced C++ Course',
    platform: 'Simplilearn',
    date: 'March 2025',
    code: '8033187',
  },
  {
    title: 'Blockchain Developer Training',
    platform: 'Simplilearn',
    date: 'March 2025',
    code: '8031316',
  },
  {
    title: 'Technology Job Simulation',
    platform: 'Deloitte (via Forage)',
    date: 'July 2025',
    code: 'J6D7QP9eYXpz9SkbD',
  },
  {
    title: 'Introduction to Generative AI Studio',
    platform: 'Google Cloud (Simplilearn)',
    date: 'March 2025',
    code: '8031448',
  },
  {
    title: 'Python for Beginners',
    platform: 'Simplilearn',
    date: 'March 2025',
    code: '7994816',
  },
  {
    title: 'Java Programming for Beginners',
    platform: 'Simplilearn',
    date: 'March 2025',
    code: '8032294',
  },
  {
    title: 'Learn C# in Hindi',
    platform: 'Great Learning Academy',
    date: 'June 2022',
    code: '—',
  },
  {
    title: 'Internship Common Aptitude Test',
    platform: 'Internship Studio',
    date: 'July 2025',
    code: 'CIT-P-2007581',
  },
]

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Certificates & Achievements
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award size={22} className="text-primary" />
              <h3 className="text-lg font-semibold">{cert.title}</h3>
            </div>

            <p className="text-gray-400 text-sm mb-1">
              <strong>Platform:</strong> {cert.platform}
            </p>
            <p className="text-gray-400 text-sm mb-1">
              <strong>Date:</strong> {cert.date}
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Certificate Code:</strong> {cert.code}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
