'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Smartphone, Palette, Gamepad2, Wrench, Brain } from 'lucide-react'

const skills = [
  {
    title: 'Web Development',
    icon: <Code2 size={30} />,
    desc: 'Experienced in building responsive and full-stack web apps using React, Next.js, Node.js, MongoDB, PHP, and MySQL.',
  },
  {
    title: 'Programming Languages',
    icon: <Brain size={30} />,
    desc: 'Proficient in Java, C++, Python, and C#. Experienced with OOP, data structures, and algorithmic problem solving.',
  },
  {
    title: 'UI/UX & Design',
    icon: <Palette size={30} />,
    desc: 'Passionate about crafting clean, modern, and animated UIs using shadcn/ui, Framer Motion, and Tailwind CSS.',
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone size={30} />,
    desc: 'Hands-on experience with Android (Java) and Flutter for cross-platform development. Familiar with Firebase integration.',
  },
  {
    title: 'Game Development',
    icon: <Gamepad2 size={30} />,
    desc: 'Experience in developing 2D/3D games using Unity (C#), including mechanics, UI, and animations.',
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={30} />,
    desc: 'Comfortable with VS Code, Git & GitHub, Firebase, Supabase, Postman, FlutterFlow, XAMPP, and Figma.',
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <span className="p-3 rounded-xl bg-white/5">{skill.icon}</span>
              {skill.title}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
