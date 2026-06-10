import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer__brand">
          <span className="footer__logo">BD</span>
          <p>Built with React, Node.js & Framer Motion</p>
        </div>

        <div className="footer__links">
          <a href="https://github.com/betelhemdemisse" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/betelhem-demissie-aa5704273"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer__copy">
          © {year} Betelhem Demissie. All rights reserved.
        </p>
      </motion.div>

      <motion.div
        className="footer__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </footer>
  )
}
