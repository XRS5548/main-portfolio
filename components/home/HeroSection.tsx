'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// 3D canvas dynamically import kar rahe hain (Next.js SSR issue avoid)
const HeroCanvas = dynamic(() => import('@/three/HeroCanvas'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center h-[100vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute  inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10"></div>

      {/* Main Content */}
      <div className="z-20 text-center px-6 h-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl  font-bold mb-4"
        >
          Rohit Verma
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-light mb-6"
        >
          Software Engineer & Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8 text-base md:text-lg text-gray-300"
        >
          I build modern, responsive, and animated digital experiences — from websites to mobile and game apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center gap-4"
        >
          <Link href="#projects">
            <Button size="lg" variant="default">
              View Work
            </Button>
          </Link>

          <Link href="/resume.pdf" target="_blank">
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
