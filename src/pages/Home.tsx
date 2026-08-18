import { ArrowRight, ArrowUpRight, Bot, Check, Clock3, Code2, Film, Globe2, Headphones, Layers3, Megaphone, Share2, Sparkles, TrendingUp, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ExpertiseMarquee } from '../components/ExpertiseMarquee'
import { PortfolioSection } from '../components/PortfolioSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { TrustCounters } from '../components/TrustCounters'
import { CTASection, IconBox, Reveal, SectionIntro, ServiceVisual, TextLink } from '../components/UI'
import { WebsitePackages } from '../components/WebsitePackages'

const serviceHighlights = [
  { icon: Globe2, title: 'Website Design & Development', text: 'Fast, mobile-first websites built to earn trust and turn visitors into customers.', result: 'Web experience', features: ['Responsive Design', 'SEO Optimized', '1-Month Support'] },
  { icon: Film, title: 'Video & Reels Editing', text: 'Sharp, platform-ready edits that hold attention and make your brand memorable.', result: 'Visual content', features: ['Reels & Shorts', 'Captions & Motion', 'Platform Exports'] },
  { icon: Share2, title: 'Social Media Content', text: 'Consistent branded content designed to keep your business visible and relevant.', result: 'Brand presence', features: ['Content Planning', 'Branded Graphics', 'Monthly Calendar'] },
  { icon: Megaphone, title: 'Digital Marketing', text: 'Focused campaigns and conversion journeys that turn attention into qualified demand.', result: 'Growth campaigns', features: ['Campaign Setup', 'Landing Page', 'Performance Tracking'] },
]

const benefits = [
  { icon: TrendingUp, title: 'Growth-focused approach', text: 'Every decision supports a clear business result.' },
  { icon: Code2, title: 'Custom-built systems', text: 'No forced fit. Your solution works your way.' },
  { icon: Clock3, title: 'Time-saving automation', text: 'Less admin. Faster delivery. More focus.' },
  { icon: WandSparkles, title: 'Premium design', text: 'Modern experiences that build instant trust.' },
  { icon: Layers3, title: 'Scalable technology', text: 'Built to support your next stage of growth.' },
  { icon: Headphones, title: 'Long-term support', text: 'A reliable digital partner after launch.' },
]

const steps = [
  { number: '01', title: 'Discover', text: 'We learn your business, audience, goals and what success should look like.' },
  { number: '02', title: 'Design', text: 'We shape the content, structure and visual direction around conversion.' },
  { number: '03', title: 'Develop', text: 'We build a fast, responsive experience with clean, scalable technology.' },
  { number: '04', title: 'Review', text: 'You review the work. We test, refine and perfect every important detail.' },
  { number: '05', title: 'Launch', text: 'We publish with confidence and stay close with support after launch.' },
]

export function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#07142d] text-white">
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[22vw] font-black leading-none tracking-[-0.09em] text-white/[0.018]">WEBPIXEL</div>
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-indigo-700/20 blur-[150px]" />
        <div className="absolute right-[-8%] top-[-20%] h-[120%] w-[72%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,.2),transparent_62%)]" />
        <div className="hero-beam absolute right-[-5%] top-[4%] h-1 w-[66%] rotate-[-34deg]" />
        <div className="hero-beam absolute right-[-8%] top-[24%] h-px w-[74%] rotate-[-25deg] opacity-70" />
        <div className="hero-beam absolute bottom-[31%] right-[-2%] h-px w-[65%] rotate-[11deg] opacity-50" />
        <span className="hero-shard absolute right-[12%] top-[15%] hidden h-12 w-12 rotate-12 lg:block" />
        <span className="hero-shard absolute bottom-[30%] right-[7%] hidden h-7 w-7 -rotate-12 lg:block" />
        <span className="hero-shard absolute bottom-[43%] left-[33%] hidden h-9 w-9 rotate-45 opacity-60 lg:block" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-7 px-5 pb-8 pt-10 md:px-8 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:pb-8 lg:pt-10 xl:px-12">
          <Reveal className="relative z-20 max-w-[700px] py-6 lg:py-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-indigo-950/40 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-slate-300 shadow-[inset_0_0_20px_rgba(34,211,238,.07)]">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Growth-focused websites for modern business
            </div>
            <h1 className="text-[clamp(3.5rem,6.5vw,7.6rem)] font-extrabold leading-[0.86] tracking-[-0.075em]">
              We build websites<br />that turn attention<br />into <span className="hero-editorial-word">revenue.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              We design and develop fast, mobile-first websites that build trust, generate leads and make your business easier to choose.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact?booking=true#booking" className="button-primary group justify-center px-6">Book a Free Strategy Call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
              <a href="#portfolio" className="button-dark-outline group justify-center px-6">View Our Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            </div>
            <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Fast Delivery <span className="mx-2 text-cyan-400">•</span> Mobile First <span className="mx-2 text-cyan-400">•</span> Support Included</p>
          </Reveal>

          <Reveal delay={0.12} className="relative z-10 -mx-5 min-h-[420px] sm:mx-0 lg:-mr-24 lg:min-h-[650px]">
            <div className="absolute inset-[8%] rounded-full bg-indigo-500/25 blur-[110px]" />
            <div className="hero-device-frame hero-float relative my-8 overflow-hidden rounded-[2.5rem] p-2 lg:my-16 lg:-rotate-2">
              <div className="flex h-11 items-center gap-2 px-4"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /><span className="h-2.5 w-2.5 rounded-full bg-indigo-400" /><span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="ml-3 text-[8px] font-black uppercase tracking-[.18em] text-white/35">Live digital growth system</span></div>
              <div className="overflow-hidden rounded-[2rem] bg-[#07142d]"><img src="/images/hero-growth-blue.webp" alt="WebPixel business analytics, app and website growth dashboard" fetchPriority="high" decoding="async" className="aspect-[4/3] w-full object-cover" /></div>
            </div>
            <div className="absolute right-[5%] top-[11%] hidden rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 text-white shadow-2xl backdrop-blur-xl xl:block"><span className="block text-sm font-extrabold tracking-[-0.02em]">Mobile first</span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[.15em] text-cyan-200">Performance focused</span></div>
            <div className="absolute bottom-[10%] right-[8%] hidden items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#08152e]/80 px-4 py-3 shadow-[0_0_35px_rgba(34,211,238,.14)] backdrop-blur-xl xl:flex">
              <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300"><Bot className="h-5 w-5" /><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" /></span>
              <span><span className="block text-[11px] font-extrabold">Live growth dashboard</span><span className="mt-0.5 block text-[9px] uppercase tracking-[0.12em] text-slate-300">Mobile-first performance</span></span>
            </div>
          </Reveal>
        </div>
        <div className="relative z-20 mx-auto max-w-[1380px] px-5 pb-8 md:px-8 xl:px-12">
          <div className="flex flex-col items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.045] px-6 py-4 text-center text-xs font-bold text-slate-300 backdrop-blur sm:flex-row"><span className="text-[9px] font-black uppercase tracking-[.2em] text-white/45">Trusted delivery</span><span><strong className="text-white">20+ Projects Delivered</strong> <span className="mx-3 text-white/20">|</span> <strong className="text-white">15+ Businesses Served</strong> <span className="mx-3 hidden text-white/20 md:inline">|</span> <strong className="hidden text-cyan-200 md:inline">1 Month Support Included</strong></span></div>
        </div>
      </section>

      <ExpertiseMarquee />

      <div className="flex flex-col">
      <section className="order-[20] border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionIntro eyebrow="Core services" title="Four services. One growth partner." description="Everything your business needs to look credible, stay visible and turn attention into action." />
            <TextLink to="/services">Explore All Services</TextLink>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {serviceHighlights.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04} className={`group flex h-full flex-col rounded-[2rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(44,62,112,.17)] ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index % 4]} ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'}`}>
                <ServiceVisual icon={service.icon} index={index} label={service.result} />
                <h3 className="mt-6 text-xl font-extrabold tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{service.text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-300/50 pt-5">{service.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-xs font-bold text-slate-700"><Check className="h-3.5 w-3.5 text-cyan-600" />{feature}</li>)}</ul>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 opacity-100 transition-all group-hover:gap-3 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">Explore Service <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="order-[40]"><PortfolioSection /></div>

      <div className="order-[10]"><TrustCounters /></div>

      <section className="order-[30] bg-[#07142d] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionIntro eyebrow="Why WebPixel" title="Technology with a business purpose." description="We do not add tech for the sake of it. We create practical systems that protect your time, lower your costs and make growth easier." light />
            <div className="mt-9 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold text-slate-300"><Sparkles className="h-4 w-4 text-cyan-300" /> Strategy first. Results always.</div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.04} className={`group rounded-2xl border border-white/10 p-7 transition-transform hover:-translate-y-1 md:p-8 ${['card-dark-indigo', 'card-dark-cyan', 'card-dark-violet'][index % 3]}`}>
                <IconBox icon={benefit.icon} index={index} dark />
                <h3 className="mt-5 font-extrabold tracking-tight">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{benefit.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="order-[60]"><WebsitePackages /></div>

      <section className="order-[50] bg-[#f5f7fc] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="A clear process" title="From business problem to better system." description="No confusion. No unnecessary complexity. Just five focused steps from idea to impact." />
          <div className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent lg:block" />
            <div className="grid gap-0 lg:grid-cols-5">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06} className="relative border-l border-indigo-200 pb-10 pl-10 last:pb-0 lg:border-l-0 lg:px-4 lg:pb-0 lg:pt-0 lg:text-center">
                <span className={`absolute -left-[1.15rem] top-0 z-10 grid h-9 w-9 place-items-center rounded-full border-4 border-[#f5f7fc] text-[9px] font-black text-white shadow-[0_8px_20px_rgba(79,70,229,.25)] lg:relative lg:left-auto lg:top-auto lg:mx-auto lg:h-14 lg:w-14 lg:text-xs ${index % 2 ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-indigo-500 to-violet-600'}`}>{step.number}</span>
                <h3 className="mt-1 text-lg font-extrabold lg:mt-7">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{step.text}</p>
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      <div className="order-[70]"><TestimonialsSection /></div>
      </div>

      <CTASection title="Ready for a business that runs smarter?" description="Turn your ideas and bottlenecks into digital solutions that save time, reduce costs and create room to grow." secondary={{ label: 'Get a Free Consultation', to: '/contact' }} />
    </>
  )
}
