import { useState, useEffect } from 'react'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact']

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return activeSection
}
