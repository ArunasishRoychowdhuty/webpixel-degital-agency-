import { Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, SectionIntro } from './UI'

const packages = [
  {
    name: 'Starter',
    suitable: 'Small business',
    price: '$499',
    note: 'A focused launch package for a credible online presence.',
    features: ['Up to 5 core pages', 'Mobile-first design', 'Contact and lead form', 'Basic SEO setup', '14 days launch support'],
  },
  {
    name: 'Pro',
    suitable: 'Growing business',
    price: '$1,299',
    note: 'A conversion-focused website built to bring in better leads.',
    features: ['Up to 10 strategic pages', 'Custom conversion UX', 'CMS or blog setup', 'CRM or email integration', '30 days priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    suitable: 'Professional brands',
    price: 'Custom',
    note: 'A fully custom digital experience for complex goals and scale.',
    features: ['Custom page architecture', 'Advanced interactions', 'Business integrations', 'Scalable design system', 'Priority delivery plan'],
  },
]

export function WebsitePackages() {
  return (
    <section className="border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionIntro eyebrow="Website packages" title="Clear packages. No hidden surprises." description="Choose the level that fits your business now. Every package includes responsive design, quality development and launch support." center />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06} className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 md:p-8 ${item.popular ? 'border-cyan-400/30 bg-gradient-to-br from-[#091b40] via-[#25275f] to-[#0d4d5d] text-white shadow-[0_32px_85px_rgba(29,46,100,.3)]' : index === 0 ? 'card-tint-cyan' : 'card-tint-violet'}`}>
              {item.popular && <span className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.14em]"><Sparkles className="h-3 w-3" /> ★ Most Popular</span>}
              <p className={`text-[9px] font-extrabold uppercase tracking-[0.17em] ${item.popular ? 'text-cyan-300' : 'text-indigo-500'}`}>Suitable for · {item.suitable}</p>
              <h3 className="mt-4 text-2xl font-extrabold">{item.name}</h3>
              <div className="mt-5 flex items-end gap-2"><strong className="text-4xl font-extrabold tracking-[-0.06em]">{item.price}</strong>{item.price !== 'Custom' && <span className={`pb-1 text-xs ${item.popular ? 'text-slate-300' : 'text-slate-500'}`}>one-time</span>}</div>
              <p className={`mt-5 min-h-14 text-sm leading-6 ${item.popular ? 'text-slate-300' : 'text-slate-600'}`}>{item.note}</p>
              <ul className={`mt-7 flex-1 space-y-3 border-t pt-6 ${item.popular ? 'border-white/10' : 'border-slate-300/60'}`}>
                {item.features.map((feature) => <li key={feature} className={`flex items-start gap-3 text-sm ${item.popular ? 'text-slate-300' : 'text-slate-700'}`}><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />{feature}</li>)}
              </ul>
              <Link to={`/contact?service=Website Design & Development&plan=${item.name}`} className={`mt-8 justify-center ${item.popular ? 'button-primary' : 'button-outline'}`}>{item.name === 'Pro' ? 'Choose Pro →' : item.price === 'Custom' ? "Let’s Build Together →" : `Choose ${item.name} →`}</Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/pricing" className="text-sm font-extrabold text-indigo-600 hover:text-indigo-800">Compare all pricing options →</Link></div>
      </div>
    </section>
  )
}
