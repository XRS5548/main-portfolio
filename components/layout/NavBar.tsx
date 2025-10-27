'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import LogoMonogram from './LogoMonogram'
import LogoSciFi from './LogoMonogram'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Type-safe animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // ✅ fixed easing type
      },
    },
  }

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? 'backdrop-blur-lg border-b border-white/10 bg-black/30 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide"
          
          >
            {/* R-V49X  */}
            <LogoSciFi  />
          </Link>
        </motion.div>

        {/* Animated Desktop Links */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] bg-primary w-0 hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:hidden text-gray-200"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden flex flex-col items-center bg-black/70 backdrop-blur-xl border-t border-white/10 py-6 space-y-4"
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-primary transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
