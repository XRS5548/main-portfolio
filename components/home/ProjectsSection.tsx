'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'HiQuizz',
    desc: 'A dynamic quiz platform built with Next.js and MongoDB featuring authentication, interactive UI, and leaderboard system.',
    image: '/images/hiquizz.png',
    tech: ['Next.js', 'MongoDB', 'shadcn/ui', 'Framer Motion'],
    github: 'https://github.com/rohit637869/HiQuizz',
    live: '#',
  },
  {
    title: 'Job Boss',
    desc: 'A job listing platform allowing employers to post, manage, and filter applications — built using MERN stack and Hero UI.',
    image: '/images/joboard.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Hero UI'],
    github: 'https://github.com/rohit637869/Job-Boss',
    live: '#',
  },
  {
    title: 'Easy Tool Space',
    desc: 'An all-in-one web platform offering free online tools like image-to-text, text-to-speech, PDF converter, and SQL builder — everything in one place for easy access.',
    image: '/images/easytoolspace.png',
    tech: ['Next.js', 'shadcn/ui',"MongoDB", 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/rohit637869',
    live: '#',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-52 md:h-60 overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <Link href={proj.github} target="_blank" className="flex items-center gap-2 text-sm hover:text-primary transition">
                  <Github size={16} /> Code
                </Link>

                <Link href={proj.live} target="_blank" className="flex items-center gap-2 text-sm hover:text-primary transition">
                  <ExternalLink size={16} /> Live
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
