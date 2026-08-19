import type { LucideIcon } from 'lucide-react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`mb-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] ${light ? 'text-cyan-300' : 'text-indigo-600'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_0_4px_rgba(79,70,229,.12)]" />
      {children}
    </div>
  )
}

export function SectionIntro({ eyebrow, title, description, center = false, light = false }: { eyebrow: string; title: string; description?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`heading-section ${light ? 'text-white' : 'text-zinc-950'}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 md:text-lg ${light ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, description, note }: { eyebrow: string; title: ReactNode; description: string; note?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#07142d] py-20 text-white md:py-40">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-indigo-500/25 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full border border-white/[0.06] shadow-[0_0_0_45px_rgba(255,255,255,.018),0_0_0_90px_rgba(255,255,255,.012)]" />
      <div className="relative mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
        <Reveal className="max-w-4xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="text-[clamp(3.25rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.07em]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">{description}</p>
          {note && <p className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">{note}</p>}
        </Reveal>
      </div>
    </section>
  )
}

export function IconBox({ icon: Icon, dark = false, index = 0 }: { icon: LucideIcon; dark?: boolean; index?: number }) {
  return (
    <div className={`service-mark service-mark-${index % 4} ${dark ? 'service-mark-dark' : ''}`}>
      <span className="service-mark-glow" />
      <Icon className="relative h-5 w-5" strokeWidth={2.15} />
      <span className="service-mark-dot" />
    </div>
  )
}

export function ServiceVisual({ icon: Icon, index = 0, label }: { icon: LucideIcon; index?: number; label: string }) {
  return (
    <div className={`service-visual service-visual-${index % 4}`}>
      <span className="service-visual-grid" />
      <span className="service-visual-orb" />
      <span className="service-visual-ring" />
      <span className="service-visual-logo">
        <Icon className="h-7 w-7" strokeWidth={1.8} />
        <span className="service-visual-pulse" />
      </span>
      <span className="absolute right-4 top-4 text-[10px] font-black tracking-[0.16em] text-white/35">{String(index + 1).padStart(2, '0')}</span>
      <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.15em] text-white/70 backdrop-blur">{label}</span>
    </div>
  )
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return <Link to={to} className="group inline-flex items-center gap-2 text-sm font-extrabold text-slate-950 transition-colors hover:text-indigo-600">{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
}

export function CTASection({ eyebrow = 'Let’s build what is next', title, description, primary = 'Start Your Project', primaryTo = '/contact', secondary }: { eyebrow?: string; title: string; description: string; primary?: string; primaryTo?: string; secondary?: { label: string; to: string } }) {
  return (
    <section className="bg-[#f5f7fc] px-5 py-20 md:px-8 md:py-28">
      <Reveal className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 px-6 py-14 text-white shadow-[0_35px_90px_rgba(59,78,181,.22)] md:px-16 md:py-24">
        <div className="cta-grid absolute inset-0 opacity-25" />
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[70px] border-white/[0.06]" />
        <div className="relative max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-cyan-100">{eyebrow}</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={primaryTo} className="button-light group">{primary}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            {secondary && <Link to={secondary.to} className="button-ghost-light">{secondary.label}</Link>}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
