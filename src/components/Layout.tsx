import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FloatingContact } from './FloatingContact'
import { PointerGlow } from './PointerGlow'
import { RouteMeta } from './RouteMeta'
import { ScrollProgress } from './ScrollProgress'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About Us', to: '/about' },
  { label: 'Get Started', to: '/contact' },
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="WebPixel Digital Agency home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 shadow-[0_10px_30px_rgba(79,70,229,.25)]">
        <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full border border-white/40" />
        <span className="text-sm font-extrabold tracking-[-0.08em] text-white">WP</span>
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-extrabold tracking-[-0.02em] ${light ? 'text-white' : 'text-zinc-950'}`}>WebPixel</span>
        <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.23em] ${light ? 'text-slate-400' : 'text-zinc-500'}`}>Digital Agency</span>
      </span>
    </Link>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="min-h-screen bg-[#f5f7fc] text-[#0b1739]">
      <ScrollToTop />
      <RouteMeta />
      <ScrollProgress />
      <PointerGlow />
      <header className={`sticky top-0 z-50 border-b backdrop-blur-2xl ${isHome ? 'border-white/[0.07] bg-[#07142d]/82' : 'border-slate-200/70 bg-[#f7f9fd]/86'}`}>
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 md:h-[80px] md:px-8 xl:px-12">
          <Brand light={isHome} />
          <nav className={`hidden items-center gap-1 rounded-full border p-1.5 lg:flex ${isHome ? 'border-white/[0.08] bg-white/[0.035]' : 'border-slate-200 bg-white/45'}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-xs font-bold transition-all ${isActive ? isHome ? 'bg-white/10 text-cyan-300' : 'bg-indigo-50 text-indigo-700' : isHome ? 'text-slate-400 hover:bg-white/[0.05] hover:text-white' : 'text-slate-600 hover:bg-white hover:text-indigo-700'}`
                }
              >{item.label}</NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link to="/contact?booking=true#booking" className="button-primary group">
              Book a Free Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`grid h-10 w-10 place-items-center rounded-xl border lg:hidden ${isHome ? 'border-white/10 bg-white/5 text-white' : 'border-zinc-200 bg-white'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className={`border-t px-5 py-5 lg:hidden ${isHome ? 'border-white/10 bg-[#07142d]' : 'border-slate-200 bg-[#f7f9fd]'}`}>
            <nav className="mx-auto flex max-w-[1280px] flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `border-b py-4 text-base font-bold ${isHome ? 'border-white/10' : 'border-slate-200'} ${isActive ? 'text-cyan-400' : isHome ? 'text-slate-300' : 'text-slate-800'}`}>
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact?booking=true#booking" onClick={() => setOpen(false)} className="button-primary mt-5 justify-center">Book a Free Strategy Call <ArrowUpRight className="h-4 w-4" /></Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>
      <FloatingContact />

      <footer className="bg-[#061127] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_.7fr_.7fr]">
            <div>
              <Brand light />
              <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug tracking-[-0.03em] text-zinc-300">
                Digital systems built to save time, cut costs and unlock growth.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                Websites · Video & Reels · Social Media Content · Digital Marketing · AI Automation · Custom Tools · Process Automation · Workflow Optimization · Email Automation
              </p>
            </div>
            <div>
              <p className="footer-label">Explore</p>
              <div className="mt-5 flex flex-col gap-3">
                {navItems.map((item) => <Link key={item.to} to={item.to} className="text-sm text-zinc-400 transition-colors hover:text-white">{item.label}</Link>)}
              </div>
            </div>
            <div>
              <p className="footer-label">Start a project</p>
              <p className="mt-5 text-sm leading-6 text-zinc-400">Tell us where your business is slowing down. We will show you a faster way forward.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300">Book a free call <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="overflow-hidden border-b border-white/10 py-7 md:py-10">
            <p className="font-display-serif whitespace-nowrap text-[clamp(4.8rem,14vw,12rem)] italic leading-[.75] tracking-[-0.06em] text-white/[0.08]">WebPixel®</p>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} WebPixel Digital Agency. All rights reserved.</p>
            <p className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for selected projects</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
