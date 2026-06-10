import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: '🚀',
    title: 'Fast & Scalable',
    text: 'Architecting backends and frontends that perform under real-world load.',
  },
  {
    icon: '🎨',
    title: 'Clean UI/UX',
    text: 'Crafting interfaces that are intuitive, accessible, and delightful to use.',
  },
  {
    icon: '🔧',
    title: 'Full-Stack',
    text: 'Comfortable across the entire stack — from database design to pixel-perfect UI.',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    text: 'Strong communicator who thrives in team environments and agile workflows.',
  },
]

export default function About({ profile }) {
  return (
    <section id="about" className="about section">
      <SectionHeading
        tag="About Me"
        title="Crafting digital experiences with purpose"
        subtitle="Turning complex problems into elegant solutions"
      />

      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I&apos;m <strong>Betelhem Demissie</strong>, a full-stack developer with a passion
            for building web applications that make a real difference. Most of my professional
            work lives on <em>private organization GitLab</em> — production systems for exam
            management, task tracking, surveys, and internal platforms — while I also maintain
            personal projects on GitHub.
          </p>
          <p>
            I work across <em>React</em>, <em>Node.js</em>, <em>Laravel</em>, and{' '}
            <em>PostgreSQL</em>, balancing technical excellence with human-centered design.
            Whether I&apos;m shipping features on a team repo or polishing a portfolio page,
            I bring the same attention to detail and drive for quality.
          </p>

          <div className="about__links">
            <motion.a
              href={profile?.github || 'https://github.com/betelhemdemisse'}
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
              whileHover={{ x: 4 }}
            >
              github.com/betelhemdemisse →
            </motion.a>
            <motion.a
              href={profile?.linkedin || 'https://www.linkedin.com/in/betelhem-demissie-aa5704273'}
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
              whileHover={{ x: 4 }}
            >
              LinkedIn Profile →
            </motion.a>
          </div>
        </motion.div>

        <div className="about__cards">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="about__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="about__card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
