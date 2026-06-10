import { motion } from 'framer-motion'

const roles = ['Full-Stack Developer', 'React Engineer', 'Node.js Builder', 'Problem Solver']

export default function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span
              className="hero__pulse"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for opportunities
          </motion.p>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I&apos;m{' '}
            <span className="hero__name">Betelhem</span>
            <br />
            <span className="hero__name-accent">Demissie</span>
          </motion.h1>

          <motion.div
            className="hero__roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                className="hero__role-tag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="hero__bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {profile?.bio ||
              'Building efficient, user-friendly web applications with React, Node.js, and modern tools.'}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="btn btn--gold"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowIcon />
            </motion.a>
            <motion.a
              href={profile?.github || 'https://github.com/betelhemdemisse'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href={profile?.linkedin || 'https://www.linkedin.com/in/betelhem-demissie-aa5704273'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {[
              { value: '10+', label: 'Org Projects' },
              { value: '4+', label: 'Years Coding' },
              { value: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__ring hero__ring--outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero__ring hero__ring--inner"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="hero__photo-wrap"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/profile.png" alt="Betelhem Demissie" className="hero__photo" />
            <div className="hero__photo-glow" />
          </motion.div>

          <motion.div
            className="hero__float-card hero__float-card--1"
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__card-icon">{'</>'}</span>
            <span>React & Node.js</span>
          </motion.div>

          <motion.div
            className="hero__float-card hero__float-card--2"
            animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="hero__card-icon">⚡</span>
            <span>Full-Stack</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <ChevronIcon />
      </motion.a>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
