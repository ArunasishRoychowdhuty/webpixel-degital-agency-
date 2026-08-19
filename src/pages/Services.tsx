import { Bot, Film, Globe2, MailCheck, Megaphone, Network, PanelsTopLeft, Share2, Workflow, Wrench } from 'lucide-react'
import { CTASection, PageHero, Reveal, SectionIntro, ServiceVisual } from '../components/UI'

const services = [
  { icon: Globe2, title: 'Website Design & Development', description: 'Premium, responsive websites built around your brand, customers and sales goals.', features: ['Responsive design', 'SEO foundation', '30-day support'], outcome: 'Outcome: More trust, stronger leads and a faster path to purchase.' },
  { icon: Film, title: 'Video & Reels Editing', description: 'Fast-paced, platform-ready edits that keep attention and strengthen your brand story.', features: ['Short-form edits', 'Captions & motion', 'Platform exports'], outcome: 'Outcome: Better watch time, stronger recall and more engaging content.' },
  { icon: Share2, title: 'Social Media Content', description: 'Consistent branded posts and creative campaigns designed for the channels your audience uses.', features: ['Content planning', 'Branded graphics', 'Publishing calendar'], outcome: 'Outcome: More visibility, a stronger presence and less content stress.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'Focused campaigns, landing pages and growth journeys built around qualified demand.', features: ['Campaign setup', 'Landing pages', 'Performance tracking'], outcome: 'Outcome: Better traffic, stronger leads and clearer marketing returns.' },
  { icon: Bot, title: 'AI Automation', description: 'Practical AI systems that handle repetitive tasks, organize information and support decisions.', features: ['Workflow mapping', 'AI implementation', 'Performance monitoring'], outcome: 'Outcome: Hours saved, fewer errors and lower operating costs.' },
  { icon: Wrench, title: 'Custom Tool Creation', description: 'Purpose-built portals, calculators, dashboards and internal tools that fit your workflow.', features: ['Custom UX', 'Business logic', 'Team training'], outcome: 'Outcome: One simple system instead of scattered software and spreadsheets.' },
  { icon: Network, title: 'Business Process Automation', description: 'Connected systems that move data, trigger actions and keep work moving automatically.', features: ['App connections', 'Trigger setup', 'Error handling'], outcome: 'Outcome: Faster delivery, less admin and consistent execution.' },
  { icon: Workflow, title: 'Workflow Optimization', description: 'We review how work gets done, remove friction and design a smarter process.', features: ['Process audit', 'Friction removal', 'Clear documentation'], outcome: 'Outcome: Clear ownership, fewer delays and more team capacity.' },
  { icon: MailCheck, title: 'Email Automation', description: 'Automated follow-up, nurture and customer emails delivered at the right moment.', features: ['Email sequences', 'CRM connection', 'Lead segmentation'], outcome: 'Outcome: Faster response times, stronger engagement and fewer missed leads.' },
]

const templates = [
  { tier: 'Starter', tag: 'Launch clearly', description: 'A sharp, focused website for new and local businesses that need credibility fast.', bullets: ['Core pages', 'Mobile-first design', 'Lead capture setup'] },
  { tier: 'Growth', tag: 'Convert more', description: 'A strategic website for established businesses ready to generate more qualified demand.', bullets: ['Expanded page system', 'Conversion planning', 'Automation-ready forms'] },
  { tier: 'Premium', tag: 'Scale without limits', description: 'A fully custom digital experience for ambitious brands with complex goals.', bullets: ['Custom UX and visuals', 'Advanced integrations', 'Scalable content system'] },
]

const serviceLabels = ['Web experience', 'Visual content', 'Brand presence', 'Growth campaigns', 'Intelligence', 'Custom system', 'Operations', 'Efficiency', 'Engagement']

export function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Complete digital solutions.<br /><span className="hero-accent-text">Built for growth.</span></>} description="From your website to your internal workflows, we build connected systems that save time, lower costs and help your business scale with confidence." note="Strategy · Design · Development · Automation" />

      <section className="bg-[#f5f7fc] pb-6 pt-16 md:pt-20">
        <div className="mx-auto grid max-w-[1280px] gap-4 px-5 md:grid-cols-[1.45fr_.55fr] md:px-8">
          <Reveal className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] shadow-[0_24px_70px_rgba(35,50,100,.14)] md:min-h-[520px]">
            <img src="/images/web-design-showcase.webp" alt="Premium website design and development showcase" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-7 text-white md:p-10"><span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-300">Digital experiences</span><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] md:text-4xl">Built beautifully. Engineered for results.</h2></div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {[{ image: '/images/app-development-showcase.webp', label: 'Apps & custom tools' }, { image: '/images/ai-automation-network.webp', label: 'AI & automation' }].map((item, index) => (
              <Reveal key={item.label} delay={0.08 + index * 0.05} className="group relative min-h-[250px] overflow-hidden rounded-[1.75rem] shadow-[0_18px_50px_rgba(35,50,100,.12)]">
                <img src={item.image} alt={item.label} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/85 to-transparent" />
                <p className="absolute bottom-0 p-6 text-base font-extrabold text-white">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fc] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="What we do" title="Less digital friction. More business momentum." description="Choose one focused service or bring us the full challenge. Every solution starts with the result your business needs." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 0.05} className={`group flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(47,65,130,.14)] md:p-8 ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet'][index % 3]}`}>
                <ServiceVisual icon={service.icon} index={index} label={serviceLabels[index]} />
                <h2 className="mt-6 text-xl font-extrabold leading-tight tracking-[-0.03em]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{service.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-300/50 pt-5">{service.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-xs font-bold text-slate-700"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{feature}</li>)}</ul>
                <p className="mt-7 border-t border-slate-100 pt-5 text-sm font-bold leading-6 text-indigo-600">{service.outcome}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="Website templates" title="The right foundation for your next stage." description="Start with the level that fits your business today. Every tier is designed for speed, trust and measurable growth." center />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {templates.map((template, index) => (
              <Reveal key={template.tier} delay={index * 0.06} className={`relative overflow-hidden rounded-[2rem] border p-7 md:p-9 ${index === 1 ? 'border-cyan-400/30 bg-gradient-to-br from-[#091b40] via-[#25275f] to-[#0d4d5d] text-white shadow-[0_30px_80px_rgba(29,46,100,.3)]' : index === 0 ? 'card-tint-cyan' : 'card-tint-violet'}`}>
                {index === 1 && <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em]">Most popular</div>}
                <PanelsTopLeft className={`h-8 w-8 ${index === 1 ? 'text-cyan-300' : 'text-indigo-600'}`} />
                <p className={`mt-8 text-[10px] font-extrabold uppercase tracking-[0.18em] ${index === 1 ? 'text-slate-300' : 'text-zinc-500'}`}>{template.tag}</p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.04em]">{template.tier}</h3>
                <p className={`mt-4 min-h-20 text-sm leading-6 ${index === 1 ? 'text-zinc-400' : 'text-zinc-600'}`}>{template.description}</p>
                <ul className={`mt-7 space-y-3 border-t pt-6 ${index === 1 ? 'border-white/10' : 'border-zinc-200'}`}>
                  {template.bullets.map((bullet) => <li key={bullet} className="flex items-center gap-3 text-sm font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />{bullet}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Free strategy call" title="Not sure what your business needs?" description="We will identify the best place to save time, reduce cost or improve growth. Then we will map a clear next step." primary="Get a Free Consultation" />
    </>
  )
}
