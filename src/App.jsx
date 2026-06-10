import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingOrbs from './components/FloatingOrbs'
import useScrollSpy from './hooks/useScrollSpy'

export default function App() {
  const activeSection = useScrollSpy()
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState({ organization: [], personal: [] })
  const [skills, setSkills] = useState([])

  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then((r) => r.json()),
      fetch('/api/projects').then((r) => r.json()),
      fetch('/api/skills').then((r) => r.json()),
    ])
      .then(([p, proj, sk]) => {
        setProfile(p)
        setProjects(proj)
        setSkills(sk)
      })
      .catch(() => {
        /* fallback data handled in components */
      })
  }, [])

  return (
    <>
      <FloatingOrbs />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer />
    </>
  )
}
