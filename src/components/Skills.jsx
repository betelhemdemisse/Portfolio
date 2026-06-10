import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const categories = {
  frontend: { label: 'Frontend', color: '#722f37' },
  backend: { label: 'Backend', color: '#9b4d5c' },
  database: { label: 'Database', color: '#5c1f35' },
  tools: { label: 'Tools', color: '#a64d5e' },
}

export default function Skills({ skills = [] }) {
  const grouped = skills.reduce((acc, skill) => {
    const cat = skill.category || 'tools'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="skills section">
      <SectionHeading
        tag="Skills"
        title="Technologies I work with"
        subtitle="A toolkit built through hands-on projects"
      />

      <div className="skills__grid">
        {Object.entries(grouped).map(([cat, items], catIndex) => (
          <motion.div
            key={cat}
            className="skills__category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1, duration: 0.6 }}
          >
            <h3 className="skills__cat-title" style={{ '--cat-color': categories[cat]?.color }}>
              {categories[cat]?.label || cat}
            </h3>
            <div className="skills__list">
              {items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-bar"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                >
                  <div className="skill-bar__header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      style={{ '--fill-color': categories[cat]?.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills__marquee-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="skills__marquee">
          {[...skills, ...skills].map((skill, i) => (
            <span key={`${skill.name}-${i}`} className="skills__pill">
              {skill.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
