import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project, featured = false }) {
  const isPrivate = project.visibility === 'private'
  const isGitLab = project.source === 'gitlab'

  return (
    <motion.article
      className={`project-card ${featured ? 'project-card--featured' : ''} ${isPrivate ? 'project-card--private' : ''}`}
      variants={card}
      whileHover={{ y: -8 }}
    >
      {featured && <div className="project-card__glow" />}

      <div className="project-card__header">
        <div className="project-card__badges">
          {isGitLab && (
            <span className="project-card__badge project-card__badge--gitlab">
              <GitLabIcon />
              GitLab
            </span>
          )}
          {project.source === 'github' && (
            <span className="project-card__badge project-card__badge--github">
              <GitHubIcon />
              GitHub
            </span>
          )}
          {isPrivate && (
            <span className="project-card__badge project-card__badge--private">
              <LockIcon />
              Private
            </span>
          )}
        </div>

        {!isPrivate && project.url && (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            whileHover={{ rotate: 15, scale: 1.2 }}
            aria-label={`View ${project.title}`}
          >
            <ExternalIcon />
          </motion.a>
        )}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {isPrivate ? (
        <p className="project-card__private-note">
          Built at {project.organization || 'organization'} — source not publicly available
        </p>
      ) : (
        project.url && (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__cta"
            whileHover={{ x: 4 }}
          >
            View on GitHub →
          </motion.a>
        )
      )}
    </motion.article>
  )
}

export default function Projects({ projects = {} }) {
  const orgProjects = projects.organization || []
  const personalProjects = projects.personal || []
  const orgFeatured = orgProjects.filter((p) => p.featured)
  const orgOther = orgProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects section">
      <SectionHeading
        tag="Projects"
        title="Things I've built"
        subtitle="Professional work on private organization GitLab, plus personal open-source projects"
      />

      {orgProjects.length > 0 && (
        <>
          <motion.div
            className="projects__section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GitLabIcon />
            <div>
              <h3>Organization Work</h3>
              <p>Production apps hosted on private GitLab — not publicly accessible</p>
            </div>
          </motion.div>

          <motion.div
            className="projects__featured"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {orgFeatured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </motion.div>

          {orgOther.length > 0 && (
            <>
              <h3 className="projects__subheading">More Organization Projects</h3>
              <motion.div
                className="projects__grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
              >
                {orgOther.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </>
          )}
        </>
      )}

      {personalProjects.length > 0 && (
        <>
          <motion.div
            className="projects__section-label projects__section-label--personal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GitHubIcon />
            <div>
              <h3>Personal & Open Source</h3>
              <p>Public projects on GitHub</p>
            </div>
          </motion.div>

          <motion.div
            className="projects__grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
          >
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </>
      )}

      <motion.div
        className="projects__cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
      >
        <p>Want to see my public code or connect professionally?</p>
        <div className="projects__cta-actions">
          <motion.a
            href="https://github.com/betelhemdemisse"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/betelhem-demissie-aa5704273"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

function GitLabIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m22.65 9.39-1.3-4.02a.86.86 0 0 0-.82-.6H3.47a.86.86 0 0 0-.82.6L1.35 9.4a.97.97 0 0 0-.02.08l10.02 13.07a.97.97 0 0 0 1.54 0l10.02-13.06a.97.97 0 0 0-.02-.1z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}
