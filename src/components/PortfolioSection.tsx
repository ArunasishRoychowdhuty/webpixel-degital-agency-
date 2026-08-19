import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ExternalLink, X } from 'lucide-react'
import { Reveal, SectionIntro } from './UI'

const projects = [
  {
    name: 'North & Key Properties',
    type: 'Real estate website',
    category: 'Web Dev',
    image: '/images/portfolio-real-estate.webp',
    problem: 'Property discovery was slow and mobile enquiries were difficult to complete.',
    built: 'We created intelligent search, mobile-first listings and a focused enquiry journey.',
    outcome: 'Faster enquiries',
    result: 'A shorter mobile path from property discovery to contact.',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Savor House',
    type: 'Restaurant & booking experience',
    category: 'UI/UX',
    image: '/images/portfolio-restaurant.webp',
    problem: 'Guests were abandoning a confusing menu and multi-step reservation flow.',
    built: 'We simplified menu discovery, booking and delivery into a fast mobile journey.',
    outcome: 'Simpler bookings',
    result: 'Guests can move from menu to reservation with fewer steps.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Clarity Partners',
    type: 'Consulting lead-generation site',
    category: 'Branding',
    image: '/images/portfolio-consulting.webp',
    problem: 'A dated brand and generic website were attracting low-fit enquiries.',
    built: 'We repositioned the visual brand and built strategic pages with automated follow-up.',
    outcome: 'Better-fit leads',
    result: 'Clear positioning helps prospects understand the offer before enquiring.',
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    name: 'Atelier Commerce',
    type: 'E-commerce experience',
    category: 'App Dev',
    image: '/images/portfolio-ecommerce.webp',
    problem: 'Shoppers struggled to browse products and complete checkout on mobile.',
    built: 'We designed a responsive storefront with guided discovery and frictionless checkout.',
    outcome: 'Easier checkout',
    result: 'Mobile shoppers can discover products and purchase with less friction.',
    accent: 'from-blue-500 to-cyan-400',
  },
]

type Project = (typeof projects)[number]

export function PortfolioSection() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Web Dev', 'Branding', 'App Dev', 'UI/UX']
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)

  useEffect(() => {
    if (!active) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="portfolio" className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-[#061127] py-24 text-white md:py-36">
      <div className="hero-grid absolute inset-0 opacity-25" />
      <span className="pointer-events-none absolute -right-6 top-12 font-display-serif text-[12rem] italic leading-none text-white/[0.025] md:text-[22rem]">work</span>
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Selected work" title="Built to look sharp. Designed to perform." description="A closer look at digital experiences shaped around clear business goals." light />
          <p className="max-w-xs text-sm leading-6 text-slate-500">Every project combines strategy, conversion-focused UX and dependable development.</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio projects">
          {categories.map((category) => <button key={category} type="button" onClick={() => setFilter(category)} className={`rounded-full border px-5 py-2.5 text-xs font-extrabold transition-all ${filter === category ? 'border-cyan-400 bg-cyan-400 text-[#061127] shadow-[0_8px_24px_rgba(34,211,238,.2)]' : 'border-white/10 bg-white/[0.04] text-slate-400 hover:border-white/25 hover:text-white'}`}>{category}</button>)}
        </div>
        <div className="mt-14 grid gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.06} className="group overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.045] shadow-[0_30px_90px_rgba(1,5,18,.35)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.065] lg:grid lg:grid-cols-[1.3fr_.7fr]">
              <div className={`relative overflow-hidden p-2.5 lg:p-3 ${index % 2 ? 'lg:order-2' : ''}`}>
                <div className="relative h-full min-h-[330px] overflow-hidden rounded-[1.75rem] md:min-h-[430px]">
                  <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center gap-1.5 border-b border-white/10 bg-[#07142d]/90 px-4 backdrop-blur"><span className="h-2 w-2 rounded-full bg-cyan-400" /><span className="h-2 w-2 rounded-full bg-indigo-400" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="ml-3 truncate text-[7px] font-bold uppercase tracking-[.12em] text-white/30">Responsive website preview</span></div>
                  <img src={project.image} alt={`${project.name} responsive website preview`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover pt-9 transition-transform duration-1000 group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/35 to-transparent opacity-70" />
                  <span className={`absolute left-4 top-12 rounded-full bg-gradient-to-r ${project.accent} px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white shadow-lg`}>{project.category} · {project.type}</span>
                  <div className="absolute bottom-4 right-4 hidden aspect-[9/16] w-[20%] overflow-hidden rounded-[1.2rem] border-[5px] border-[#07142d] bg-[#07142d] shadow-[0_18px_45px_rgba(1,5,18,.45)] sm:block"><img src={project.image} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover object-center" /><span className="absolute left-1/2 top-1 h-1 w-5 -translate-x-1/2 rounded-full bg-white/20" /></div>
                </div>
              </div>
              <div className={`flex flex-col justify-center p-7 md:p-10 ${index % 2 ? 'lg:order-1' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-cyan-300">Project / 0{index + 1}</p><h3 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] text-white md:text-4xl">{project.name}</h3></div>
                  <button type="button" onClick={() => setActive(project)} aria-label={`View ${project.name}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-cyan-300 transition-all hover:rotate-6 hover:bg-cyan-400 hover:text-[#061127]"><ArrowUpRight className="h-4 w-4" /></button>
                </div>
                <div className="mt-6 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-[.8fr_1.2fr]">
                  <div><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Problem</p><p className="mt-2 text-xs leading-5 text-slate-400">{project.problem}</p></div>
                  <div><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-500">Solution</p><p className="mt-2 text-xs leading-5 text-slate-400">{project.built}</p></div>
                </div>
                <div className="mt-7 flex flex-col gap-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] p-5"><div><span className="font-display-serif text-4xl italic tracking-[-0.04em] text-cyan-300">{project.outcome}</span><p className="mt-2 text-xs font-medium leading-5 text-slate-300">{project.result}</p></div><button type="button" onClick={() => setActive(project)} className="inline-flex items-center gap-2 text-sm font-extrabold text-white transition-colors hover:text-cyan-300">Read Case Study <ExternalLink className="h-3.5 w-3.5" /></button></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] grid place-items-center bg-[#020817]/85 p-4 backdrop-blur-xl" onMouseDown={() => setActive(null)}>
            <motion.div role="dialog" aria-modal="true" aria-label={`${active.name} case study`} initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.25 }} onMouseDown={(event) => event.stopPropagation()} className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[1.75rem] border border-white/10 bg-[#0a1733] p-2 text-white shadow-2xl">
              <button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#07142d]/75 text-white backdrop-blur transition-colors hover:bg-white hover:text-slate-950" aria-label="Close project preview"><X className="h-4 w-4" /></button>
              <img src={active.image} alt={`${active.name} full website preview`} className="aspect-[16/9] w-full rounded-[1.3rem] object-cover" />
              <div className="p-6 md:p-9">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-300">{active.category} · {active.type}</p><h3 className="mt-2 text-3xl font-extrabold tracking-[-0.04em]">{active.name}</h3>
                <div className="mt-7 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Problem</p><p className="mt-3 text-sm leading-6 text-slate-200">{active.problem}</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">Solution</p><p className="mt-3 text-sm leading-6 text-slate-200">{active.built}</p></div><div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] p-5"><p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-cyan-300">Result</p><p className="font-display-serif mt-3 text-4xl italic tracking-[-0.04em] text-cyan-200">{active.outcome}</p><p className="mt-2 flex items-start gap-2 text-sm font-bold text-slate-200"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{active.result}</p></div></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
