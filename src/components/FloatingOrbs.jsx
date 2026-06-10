import { motion } from 'framer-motion'

const orbs = [
  { size: 360, x: '5%', y: '10%', color: 'rgba(114, 47, 55, 0.06)', duration: 18 },
  { size: 280, x: '80%', y: '5%', color: 'rgba(155, 77, 92, 0.05)', duration: 22 },
  { size: 220, x: '85%', y: '55%', color: 'rgba(114, 47, 55, 0.04)', duration: 16 },
  { size: 300, x: '0%', y: '65%', color: 'rgba(245, 235, 238, 0.8)', duration: 20 },
]

export default function FloatingOrbs() {
  return (
    <div className="orbs" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -10, 0],
            scale: [1, 1.08, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
