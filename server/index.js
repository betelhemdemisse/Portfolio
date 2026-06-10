import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const PROFILE = {
  name: 'Betelhem Demissie',
  title: 'Full-Stack Developer',
  bio: 'Full-stack developer building production web applications for organizations and personal projects. I work primarily on private GitLab repos at scale, with expertise in Node.js, React, Laravel, and PostgreSQL.',
  github: 'https://github.com/betelhemdemisse',
  linkedin: 'https://www.linkedin.com/in/betelhem-demissie-aa5704273',
  email: 'betelhemdemisse@gmail.com',
  gitlabNote: 'Most of my professional work lives on private organization GitLab — details below.',
}

// Edit these with your real org project names & descriptions (no public URL needed)
const ORG_PROJECTS = [
  {
    id: 'org-1',
    title: 'FPGMS Platform',
    description:
      'Full-stack graduate & facility program management system — user roles, reporting, and admin dashboards for organizational workflows.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'React', 'REST API'],
    featured: true,
    visibility: 'private',
    source: 'gitlab',
    organization: 'Organization',
  },
  {
    id: 'org-2',
    title: 'Exam Management System',
    description:
      'End-to-end exam lifecycle platform: student enrollment, scheduling, grading, and result publishing for institutional use.',
    tech: ['JavaScript', 'Node.js', 'React', 'MongoDB'],
    featured: true,
    visibility: 'private',
    source: 'gitlab',
    organization: 'Organization',
  },
  {
    id: 'org-3',
    title: 'Task Management System',
    description:
      'Team task tracker with role-based access, assignment workflows, and real-time status updates for internal teams.',
    tech: ['React', 'Node.js', 'JavaScript', 'REST API'],
    featured: true,
    visibility: 'private',
    source: 'gitlab',
    organization: 'Organization',
  },
  {
    id: 'org-4',
    title: 'Laravel React Survey Platform',
    description:
      'Survey creation and analytics tool with a Laravel API backend and a responsive React frontend for data collection.',
    tech: ['Laravel', 'React', 'PHP', 'MySQL'],
    featured: true,
    visibility: 'private',
    source: 'gitlab',
    organization: 'Organization',
  },
  {
    id: 'org-5',
    title: 'CI/CD Pipeline & Deployment',
    description:
      'Automated testing, build, and deployment pipelines for organization applications using GitLab CI and container workflows.',
    tech: ['GitLab CI', 'Docker', 'Laravel', 'DevOps'],
    featured: false,
    visibility: 'private',
    source: 'gitlab',
    organization: 'Organization',
  },
]

const PERSONAL_PROJECTS = [
  {
    id: 'personal-1',
    title: 'Dark Theme Website Design',
    description:
      'Sleek dark-mode website design showcasing modern CSS techniques and responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    visibility: 'public',
    source: 'github',
    url: 'https://github.com/betelhemdemisse/Dark-Theme-Website-Design',
  },
  {
    id: 'personal-2',
    title: 'Digital Clock',
    description: 'Interactive digital clock built with vanilla CSS and JavaScript.',
    tech: ['CSS', 'JavaScript', 'HTML'],
    featured: false,
    visibility: 'public',
    source: 'github',
    url: 'https://github.com/betelhemdemisse/Digital-Clock',
  },
  {
    id: 'personal-3',
    title: 'React Learning Projects',
    description:
      'Collection of React exercises and components built while sharpening frontend skills.',
    tech: ['React', 'JavaScript'],
    featured: false,
    visibility: 'public',
    source: 'github',
    url: 'https://github.com/betelhemdemisse/react_pedro',
  },
]

const SKILLS = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'Laravel', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 82, category: 'database' },
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'Git, GitHub & GitLab', level: 90, category: 'tools' },
  { name: 'REST APIs', level: 88, category: 'backend' },
  { name: 'CSS / Tailwind', level: 85, category: 'frontend' },
]

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/profile', (_req, res) => {
  res.json(PROFILE)
})

app.get('/api/projects', (_req, res) => {
  res.json({
    organization: ORG_PROJECTS,
    personal: PERSONAL_PROJECTS,
  })
})

app.get('/api/skills', (_req, res) => {
  res.json(SKILLS)
})

const contactMessages = []

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const entry = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  }

  contactMessages.push(entry)
  console.log('New contact message:', entry)

  res.json({ success: true, message: 'Message received! I will get back to you soon.' })
})

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
