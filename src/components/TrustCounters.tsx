import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { Clock3, FolderCheck, Headphones, HeartHandshake } from 'lucide-react'

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visible = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [value, visible])

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

const stats = [
  { icon: FolderCheck, value: 20, suffix: '+', label: 'Projects Delivered', note: 'Websites, content and digital systems completed' },
  { icon: HeartHandshake, value: 15, suffix: '+', label: 'Businesses Served', note: 'Across service, commerce and consulting sectors' },
  { icon: Headphones, value: 1, suffix: ' month', label: 'Support Included', note: 'Guidance and assistance after website launch' },
  { icon: Clock3, value: 14, prefix: '7–', suffix: ' days', label: 'Typical Delivery', note: 'For focused small-business website projects' },
]

export function TrustCounters() {
  return (
    <section className="relative overflow-hidden bg-[#07142d] py-20 text-white md:py-24">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`group rounded-[2rem] border border-white/10 p-6 md:p-7 ${['card-dark-indigo', 'card-dark-cyan', 'card-dark-violet', 'card-dark-indigo'][index]}`}>
              <div className="flex items-center justify-between"><span className="service-mark service-mark-dark"><stat.icon className="relative h-5 w-5" /><span className="service-mark-dot" /></span><span className="text-[9px] font-black tracking-[0.16em] text-white/20">0{index + 1}</span></div>
              <strong className="mt-8 block text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl"><Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} /></strong>
              <p className="mt-3 text-sm font-extrabold text-cyan-200">{stat.label}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
