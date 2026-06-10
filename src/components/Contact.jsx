import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setStatus({ type: 'success', message: data.message })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <SectionHeading
        tag="Contact"
        title="Let's work together"
        subtitle="Have a project in mind? I'd love to hear from you."
      />

      <div className="contact__grid">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Whether you need a full-stack developer for your next project or just want to
            connect — drop me a message and I&apos;ll respond as soon as I can.
          </p>

          <div className="contact__channels">
            {[
              {
                label: 'GitHub',
                value: 'betelhemdemisse',
                href: profile?.github || 'https://github.com/betelhemdemisse',
              },
              {
                label: 'LinkedIn',
                value: 'Betelhem Demissie',
                href: profile?.linkedin || 'https://www.linkedin.com/in/betelhem-demissie-aa5704273',
              },
              {
                label: 'Email',
                value: profile?.email || 'betelhemdemisse@gmail.com',
                href: `mailto:${profile?.email || 'betelhemdemisse@gmail.com'}`,
              },
            ].map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.label !== 'Email' ? '_blank' : undefined}
                rel={ch.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="contact__channel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
              >
                <span className="contact__channel-label">{ch.label}</span>
                <span className="contact__channel-value">{ch.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className={`contact__field ${field === 'message' ? 'contact__field--full' : ''}`}>
              <label htmlFor={field}>
                {field === 'name' ? 'Your Name' : field === 'email' ? 'Email Address' : 'Message'}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
              ) : (
                <input
                  id={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === 'name' ? 'John Doe' : 'you@email.com'}
                  required
                />
              )}
            </div>
          ))}

          <motion.button
            type="submit"
            className="btn btn--gold contact__submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.04, y: loading ? 0 : -2 }}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>

          <AnimatePresence>
            {status && (
              <motion.p
                className={`contact__status contact__status--${status.type}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
