'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-center items-center gap-10 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border border-white/10"
      >
        <Image
          src="/images/profile.jpg" // 👈 replace with your photo
          alt="Rohit Verma"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6">
          I’m <span className="font-semibold">Rohit Verma</span>, a passionate and self-driven Software Engineer
          from Jaipur, India. I love creating impactful digital solutions, from responsive websites
          to mobile and game applications. Skilled in modern technologies like <strong>React</strong>,
          <strong> Next.js</strong>, <strong>Node.js</strong>, and <strong>Flutter</strong>, I enjoy building
          seamless user experiences and exploring new innovations in tech.
        </p>

        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400 mb-8">
          <p><strong>📍 Location:</strong> Jaipur, Rajasthan</p>
          <p><strong>🎓 Education:</strong> B.Tech, CSE</p>
          <p><strong>💼 Role:</strong> Software Engineer</p>
          <p><strong>📧 Email:</strong> rohitverma637869@gmail.com</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link href="/resume.pdf" target="_blank">
            <Button size="lg" variant="default">
              Download Resume
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
