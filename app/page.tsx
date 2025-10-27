import AboutSection from '@/components/home/AboutSection'
import CertificatesSection from '@/components/home/CertificatesSection'
import ContactSection from '@/components/home/ContactSection'
import EducationSection from '@/components/home/EducationSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import HeroSection from '@/components/home/HeroSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import SkillsSection from '@/components/home/SkillsSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection/>
      <ContactSection />
    </div>
  )
}
