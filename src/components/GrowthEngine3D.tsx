import { useRef, type PointerEvent } from 'react'
import { Bot, ChartNoAxesCombined, CircleCheck, Globe2, MousePointer2, Workflow, Zap } from 'lucide-react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const capabilities = [
  { icon: Globe2, title: 'Digital Experience', text: 'Websites and apps that turn attention into action.' },
  { icon: Workflow, title: 'Connected Workflow', text: 'Tools and processes that move work automatically.' },
  { icon: Bot, title: 'AI Operations', text: 'Always-on systems that reduce repetitive work.' },
]

export function GrowthEngine3D() {
  const sectionRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.55 })
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.55 })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const sceneY = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [70, 0, -70])
  const sceneRotate = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [-3, 0, 3])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 0.9])

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reducedMotion || !sceneRef.current) return
    const rect = sceneRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    pointerX.set(x * 10)
    pointerY.set(y * -8)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-slate-200 bg-[#edf2fb] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(79,70,229,.12),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.55 }}>
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 shadow-[0_0_0_4px_rgba(79,70,229,.12)]" /> One connected growth engine
            </div>
            <h2 className="heading-section max-w-xl">Your business. Working as one system.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 md:text-lg">We connect your customer experience, daily workflows and data. The result is less manual work, clearer decisions and more room to grow.</p>
          </motion.div>
          <div className="mt-9 space-y-3">
            {capabilities.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.45 }} className="group flex gap-4 rounded-2xl border border-transparent p-3 transition-colors hover:border-indigo-100 hover:bg-white/70">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-100 bg-white text-indigo-600 shadow-sm transition-transform group-hover:-rotate-3 group-hover:scale-105"><item.icon className="h-4.5 w-4.5" /></span>
                <span><strong className="block text-sm font-extrabold">{item.title}</strong><span className="mt-1 block text-sm leading-6 text-zinc-600">{item.text}</span></span>
              </motion.div>
            ))}
          </div>
          <Link to="/services" className="button-outline mt-8 bg-transparent">Explore the complete system <Zap className="h-4 w-4 text-indigo-600" /></Link>
        </div>

        <motion.div style={{ y: sceneY, rotateZ: sceneRotate }} className="relative">
          <motion.div style={{ scale: glowScale }} className="absolute inset-[14%] rounded-full bg-indigo-500/25 blur-[80px]" />
          <div
            ref={sceneRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            className="growth-scene relative mx-auto h-[480px] max-w-[700px] cursor-crosshair select-none sm:h-[590px]"
            aria-label="Interactive 3D view of a connected digital growth system"
          >
            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: 'preserve-3d' }}
              className="absolute inset-[8%_2%_6%] sm:inset-[8%_5%_5%]"
            >
              <div className="absolute inset-[8%_6%] rounded-[2rem] border border-white/10 bg-[#07142d] shadow-[0_55px_100px_rgba(25,44,92,.32)] [transform:translateZ(0)]">
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  <div className="hero-grid absolute inset-0 opacity-50" />
                  <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-[70px]" />
                </div>
                <div className="relative flex h-full flex-col p-5 sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-[11px] font-black text-white">WP</span><span><strong className="block text-xs text-white">Growth Command</strong><span className="mt-0.5 block text-[8px] uppercase tracking-[0.16em] text-slate-500">Live business overview</span></span></div>
                    <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.14em] text-green-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Systems active</span>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-4">
                    {[['Time saved', '32h'], ['Cost reduced', '28%'], ['Leads captured', '+46%']].map(([label, value]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4"><span className="text-[7px] font-bold uppercase tracking-[0.1em] text-zinc-600 sm:text-[8px]">{label}</span><strong className="mt-2 block text-lg tracking-[-0.04em] text-white sm:text-2xl">{value}</strong></div>)}
                  </div>
                  <div className="mt-3 flex flex-1 gap-3 sm:mt-4 sm:gap-4">
                    <div className="flex-[1.4] rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                      <div className="flex items-center justify-between"><span className="text-[8px] font-extrabold uppercase tracking-[0.12em] text-slate-500">Growth velocity</span><ChartNoAxesCombined className="h-3.5 w-3.5 text-cyan-400" /></div>
                      <svg viewBox="0 0 320 130" className="mt-4 h-[100px] w-full sm:h-[130px]" aria-hidden="true">
                        <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity=".38"/><stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/></linearGradient></defs>
                        <path d="M0 118 C38 110 52 91 83 96 S131 67 160 73 S204 30 231 42 S279 13 320 17 L320 130 L0 130Z" fill="url(#chartFill)" />
                        <path d="M0 118 C38 110 52 91 83 96 S131 67 160 73 S204 30 231 42 S279 13 320 17" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
                        {[83,160,231,320].map((cx, i) => <circle key={cx} cx={cx} cy={[96,73,42,17][i]} r="4" fill="#07142d" stroke="#818cf8" strokeWidth="2" />)}
                      </svg>
                    </div>
                    <div className="flex flex-1 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
                      <span className="text-[8px] font-extrabold uppercase tracking-[0.12em] text-zinc-500">Automations</span>
                      <div className="space-y-2.5">
                        {[82, 68, 91].map((value, index) => <div key={value}><div className="mb-1 flex justify-between text-[7px] text-slate-500"><span>{['Lead flow', 'Follow-up', 'Operations'][index]}</span><span>{value}%</span></div><div className="h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${value}%` }} /></div></div>)}
                      </div>
                      <span className="flex items-center gap-1.5 text-[8px] font-bold text-green-400"><CircleCheck className="h-3 w-3" /> All workflows healthy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 top-[18%] w-36 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_25px_50px_rgba(0,0,0,.18)] sm:-left-5 sm:w-44 [transform:translateZ(80px)]">
                <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 text-indigo-600"><Globe2 className="h-4 w-4" /></span><span><strong className="block text-[10px]">Website</strong><span className="block text-[7px] uppercase tracking-[0.1em] text-slate-400">Converting now</span></span></div>
                <div className="mt-3 flex items-end gap-1">{[35, 55, 42, 76, 61, 88, 72].map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-cyan-400" style={{ height: `${height * 0.35}px` }} />)}</div>
              </div>

              <div className="absolute -right-1 bottom-[15%] w-40 rounded-2xl border border-cyan-400/20 bg-[#0c1a38]/95 p-4 text-white shadow-[0_25px_55px_rgba(23,37,84,.4)] backdrop-blur sm:-right-4 sm:w-48 [transform:translateZ(110px)]">
                <div className="flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300"><Bot className="h-4 w-4" /></span><span className="flex items-center gap-1.5 text-[7px] uppercase tracking-[0.12em] text-green-400"><span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Live</span></div>
                <strong className="mt-4 block text-xs">AI work queue cleared</strong>
                <p className="mt-1 text-[8px] leading-4 text-zinc-500">14 tasks completed without manual input.</p>
              </div>

              <div className="absolute bottom-[3%] left-[20%] hidden items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-[8px] font-extrabold uppercase tracking-[0.12em] text-slate-500 shadow-lg backdrop-blur sm:flex [transform:translateZ(45px)]"><Zap className="h-3 w-3 fill-indigo-600 text-indigo-600" /> Data moving in real time</div>
            </motion.div>
            <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[8px] font-extrabold uppercase tracking-[0.18em] text-zinc-400 sm:flex"><MousePointer2 className="h-3 w-3" /> Move cursor · scroll to explore</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
