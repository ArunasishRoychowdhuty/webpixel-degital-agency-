import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ArrowRight, Check, CheckCircle2, Clock3, Lightbulb, MessageSquareQuote, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { StrategyBooking } from '../components/StrategyBooking'
import { IconBox, PageHero, Reveal, SectionIntro } from '../components/UI'

const reviews = [
  { quote: 'The team understood our goals immediately and delivered a site that looks premium and brings in better leads.', name: 'Michael Tan', role: 'Operations Director', company: 'Clarity Partners', image: '/images/client-michael.webp', mark: 'CP' },
  { quote: 'Our customer journey is now cleaner and easier to manage. We save hours every week and miss fewer opportunities.', name: 'Priya Mehta', role: 'Growth Director', company: 'Atelier Commerce', image: '/images/client-priya.webp', mark: 'AC' },
  { quote: 'WebPixel created a mobile experience that makes booking simple. The whole team serves customers faster now.', name: 'Daniel Roy', role: 'Business Owner', company: 'Savor House', image: '/images/client-daniel.webp', mark: 'SH' },
  { quote: 'Clear process, thoughtful strategy and excellent support. The finished website reflects the quality of our business.', name: 'Sarah Khan', role: 'Founder', company: 'North & Key', image: '/images/client-sarah.webp', mark: 'NK' },
]

export function Contact() {
  const [searchParams] = useSearchParams()
  const [sent, setSent] = useState(false)
  const bookingRequested = searchParams.get('booking') === 'true'
  const selectedNeed = useMemo(() => {
    if (searchParams.get('demo')) return 'Free demo'
    return searchParams.get('service') || ''
  }, [searchParams])

  useEffect(() => {
    if (!bookingRequested) return
    const timer = window.setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250)
    return () => window.clearTimeout(timer)
  }, [bookingRequested])

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    window.setTimeout(() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50)
  }

  return (
    <>
      <PageHero eyebrow="Contact / Get started" title={<>Your next growth move<br /><span className="hero-accent-text">starts here.</span></>} description="Tell us what is slowing your business down or where you want to grow. We will help you find a clear, practical digital solution." note="Free consultation · No pressure · Clear next steps" />

      <StrategyBooking />

      <section className="bg-[#f5f7fc] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <SectionIntro eyebrow="Free demo offer" title="See the opportunity before you commit." description="A focused first look at how the right website, tool or automation could improve your business." />
            <Reveal delay={0.06} className="group relative mt-8 overflow-hidden rounded-2xl shadow-[0_20px_55px_rgba(35,50,100,.14)]">
              <img src="/images/ai-automation-network.webp" alt="AI automation and connected workflow demo" loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07142d]/25 to-transparent" />
            </Reveal>
          </div>
          <Reveal delay={0.08} className="card-tint-indigo rounded-2xl p-7 md:p-9">
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-600">What is included</p>
                <ul className="mt-5 space-y-4">
                  {['A review of your goal or bottleneck', 'A tailored solution outline', 'A simple workflow or screen concept', 'Clear scope, timeline and next step'].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-700"><Check className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />{item}</li>)}
                </ul>
              </div>
              <div className="border-t border-zinc-200 pt-7 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-600">Why it helps</p>
                <p className="mt-5 text-sm leading-6 text-zinc-600">You see what is possible without guessing. You understand where time and money can be saved. You leave with a practical direction, even before a project begins.</p>
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-indigo-50 p-4"><Lightbulb className="h-5 w-5 text-indigo-600" /><span className="text-xs font-extrabold">Clarity first. Commitment second.</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reviews" className="border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="Client reviews" title="Work that makes business better." description="Our clients value the result. They also value the clear, reliable process that gets them there." center />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={(index % 2) * 0.05} className={`rounded-2xl p-7 md:p-8 ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index % 4]}`}>
                <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><img src={review.image} alt={`${review.name}, ${review.role}`} loading="lazy" className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/70" /><div><p className="text-sm font-extrabold">{review.name}</p><p className="mt-1 text-[10px] text-slate-500">{review.role} · {review.company}</p></div></div><span className="grid h-9 w-9 place-items-center rounded-xl border border-indigo-200/60 bg-white/50 text-[9px] font-black text-indigo-600">{review.mark}</span></div>
                <div className="mt-6 flex items-start justify-between"><MessageSquareQuote className="h-7 w-7 text-indigo-600" /><div className="flex gap-1">{Array.from({ length: 5 }).map((_, star) => <span key={star} className="text-xs text-cyan-500">★</span>)}</div></div>
                <blockquote className="mt-6 text-lg font-semibold leading-8 tracking-[-0.02em]">“{review.quote}”</blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07142d] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <SectionIntro eyebrow="Start a conversation" title="Tell us what better looks like." description="Whether you need more leads, fewer manual tasks or a stronger digital product, the first step is simple." light />
            <div className="mt-10 space-y-4">
              {[
                { icon: Clock3, title: 'Fast response', text: 'We reply within one business day.' },
                { icon: ShieldCheck, title: 'No-pressure advice', text: 'Clear guidance before any commitment.' },
                { icon: Lightbulb, title: 'Business-focused thinking', text: 'Every idea connects to time, cost or growth.' },
              ].map((item, index) => <div key={item.title} className="group flex gap-4"><IconBox icon={item.icon} index={index} dark /><div><p className="text-sm font-extrabold">{item.title}</p><p className="mt-1 text-sm text-slate-300">{item.text}</p></div></div>)}
            </div>
          </div>

          <Reveal delay={0.08}>
            <div id="contact-form" className="rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-[#0b1c42] via-[#111f4f] to-[#10354f] p-6 shadow-[0_30px_80px_rgba(2,8,23,.35)] md:p-9">
              {sent ? (
                <div className="grid min-h-[520px] place-items-center text-center">
                  <div className="max-w-md">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-500/10 text-green-400"><CheckCircle2 className="h-8 w-8" /></span>
                    <h2 className="mt-7 text-3xl font-extrabold tracking-[-0.04em]">Thanks. Your next step is in motion.</h2>
                    <p className="mt-4 leading-7 text-zinc-400">We have received your enquiry and will be in touch within one business day to discuss the clearest way forward.</p>
                    <button type="button" onClick={() => setSent(false)} className="button-dark-outline mt-8">Send another message</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submitForm}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-label">Name<input required name="name" className="form-input" placeholder="Your name" /></label>
                    <label className="form-label">Business Name<input required name="business" className="form-input" placeholder="Your business" /></label>
                    <label className="form-label">Phone / WhatsApp<input required name="phone" type="tel" className="form-input" placeholder="Best contact number" /></label>
                    <label className="form-label">Email<input required name="email" type="email" className="form-input" placeholder="you@business.com" /></label>
                    <label className="form-label sm:col-span-2">What do you need help with?
                      <select required name="need" className="form-input" defaultValue={selectedNeed}>
                        <option value="" disabled>Select a service</option>
                        <option>Website Design & Development</option><option>Video & Reels Editing</option><option>Social Media Content</option><option>Digital Marketing</option><option>AI Automation</option><option>Custom Tool Creation</option><option>Business Process Automation</option><option>Workflow Optimization</option><option>Email Automation</option><option>Website Pricing</option><option>Tool Creation Pricing</option><option>Automation Pricing</option><option>Free demo</option>
                      </select>
                    </label>
                    <label className="form-label sm:col-span-2">Message<textarea required name="message" className="form-input min-h-32 resize-y" placeholder="Tell us about your goal, challenge or idea." /></label>
                  </div>
                  <button type="submit" className="button-primary mt-7 w-full justify-center py-4">Get My Free Consultation <ArrowRight className="h-4 w-4" /></button>
                  <p className="mt-4 text-center text-[11px] leading-5 text-zinc-600">By submitting, you agree to be contacted about your enquiry. Your details stay private.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
