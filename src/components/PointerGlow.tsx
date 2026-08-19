import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

export function PointerGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const smoothX = useSpring(x, { stiffness: 90, damping: 24, mass: 0.5 })
  const smoothY = useSpring(y, { stiffness: 90, damping: 24, mass: 0.5 })
  const background = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(99, 102, 241, .075), transparent 72%)`

  useEffect(() => {
    const move = (event: PointerEvent) => { x.set(event.clientX); y.set(event.clientY) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] hidden lg:block" style={{ background }} />
}
