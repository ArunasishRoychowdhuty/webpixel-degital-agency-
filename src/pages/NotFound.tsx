import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="relative grid min-h-[72vh] place-items-center overflow-hidden bg-[#07142d] px-5 py-24 text-center text-white">
      <div className="hero-grid absolute inset-0 opacity-35" />
      <div className="absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="relative max-w-2xl">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"><Compass className="h-6 w-6" /></span>
        <p className="font-display-serif mt-7 text-8xl italic text-white/15 md:text-9xl">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.05em] md:text-6xl">This page took a wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-slate-400">The page you requested does not exist. Head back to the homepage and continue exploring WebPixel.</p>
        <Link to="/" className="button-primary mt-8"><ArrowLeft className="h-4 w-4" />Back to Home</Link>
      </div>
    </section>
  )
}
