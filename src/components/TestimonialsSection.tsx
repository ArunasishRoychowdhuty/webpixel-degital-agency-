import { MessageSquareQuote } from 'lucide-react'
import { Reveal, SectionIntro } from './UI'

const testimonials = [
  { image: '/images/client-sarah.webp', name: 'Sarah Khan', role: 'Founder', company: 'North & Key', mark: 'NK', quote: 'WebPixel gave us a website that finally feels as premium as our service. The process was clear, fast and focused on enquiries from day one.' },
  { image: '/images/client-daniel.webp', name: 'Daniel Roy', role: 'Business Owner', company: 'Savor House', mark: 'SH', quote: 'Customers can now find what they need and book in seconds. The mobile experience is excellent and our team spends less time answering basic questions.' },
  { image: '/images/client-priya.webp', name: 'Priya Mehta', role: 'Growth Director', company: 'Atelier Commerce', mark: 'AC', quote: 'The new customer journey is cleaner, faster and much easier to manage. WebPixel understood both the brand and the commercial goal.' },
  { image: '/images/client-michael.webp', name: 'Michael Tan', role: 'Operations Director', company: 'Clarity Partners', mark: 'CP', quote: 'Clear strategy, thoughtful design and reliable support. The finished system saves our team time and gives every new lead a better first impression.' },
]

export function TestimonialsSection() {
  return (
    <section className="border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionIntro eyebrow="Client testimonials" title="Trusted by people building serious businesses." description="Good work should feel clear during the project and valuable long after launch." center />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={(index % 2) * 0.06} className={`rounded-[2rem] p-6 md:p-8 ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index]}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={`${item.name}, ${item.role} at ${item.company}`} loading="lazy" decoding="async" className="h-14 w-14 rounded-2xl object-cover shadow-md ring-2 ring-white/70" />
                  <div><p className="text-sm font-extrabold text-slate-950">{item.name}</p><p className="mt-1 text-xs text-slate-500">{item.role} · {item.company}</p></div>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-indigo-200/60 bg-white/55 text-[10px] font-black tracking-[-0.04em] text-indigo-600 shadow-sm" aria-label={`${item.company} logo`}>{item.mark}</span>
              </div>
              <div className="mt-6 flex items-center justify-between"><MessageSquareQuote className="h-7 w-7 text-indigo-500" /><div className="text-xs tracking-wider text-cyan-500" aria-label="5 out of 5 stars">★★★★★</div></div>
              <blockquote className="mt-5 text-lg font-semibold leading-8 tracking-[-0.02em] text-slate-800">“{item.quote}”</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
