'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try {
      const res = await fetch('/api/post/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess('Message sent successfully 🚀')
        setForm({ name: '', email: '', message: '' })
      } else {
        setSuccess(data.message || 'Something went wrong ❌')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSuccess('Failed to send message ❌')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Get In Touch
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-5"
        >
          <p className="text-gray-400 text-base leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Let’s connect and build something amazing together!
          </p>

          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-3">
              <Mail size={18} /> rohitverma637869@gmail.com
            </p>
            <Link
              href="https://github.com/XRS5548"
              target="_blank"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <Github size={18} /> https://github.com/XRS5548
            </Link>
            <Link
              href="http://www.linkedin.com/in/xrs5548"
              target="_blank"
              className="flex items-center gap-3 hover:text-primary transition"
            >
              <Linkedin size={18} /> linkedin.com/in/xrs5548
            </Link>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />

          <Button
            type="submit"
            size="lg"
            className="w-full flex items-center gap-2 justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Sending...
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </Button>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center text-sm mt-3 ${
                success.includes('🚀') ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {success}
            </motion.p>
          )}
        </motion.form>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rohit Verma — All Rights Reserved.
      </div>
    </section>
  )
}
