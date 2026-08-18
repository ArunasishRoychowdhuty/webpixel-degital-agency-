import { Check, CircleDollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CTASection, PageHero, Reveal, SectionIntro } from '../components/UI'

const pricingGroups = [
  {
    label: 'Website Pricing',
    title: 'A stronger digital front door.',
    description: 'High-trust websites designed to convert attention into action.',
    image: '/images/pricing-websites.webp',
    plans: [
      { name: 'Starter', price: '$499', summary: 'Suitable for small businesses that need a credible online presence.', features: ['Up to 5 core pages', 'Mobile-first premium design', 'Contact and lead forms', 'Basic SEO setup', '14 days launch support'] },
      { name: 'Pro', price: '$1,299', summary: 'Suitable for growing businesses ready to generate more leads.', features: ['Up to 10 strategic pages', 'Conversion-focused UX', 'CMS and blog setup', 'Email or CRM integration', '30 days priority support'], popular: true },
      { name: 'Enterprise', price: 'Custom', summary: 'Suitable for professional brands with advanced goals and integrations.', features: ['Custom page architecture', 'Advanced interactions', 'Third-party integrations', 'Scalable design system', 'Priority delivery plan'] },
    ],
  },
  {
    label: 'Tool Creation Pricing',
    title: 'Tools that fit your work.',
    description: 'Stop forcing generic software to solve a specific business problem.',
    image: '/images/pricing-custom-tools.webp',
    plans: [
      { name: 'Basic', price: '$X,XXX', summary: 'One focused tool for one clear task or bottleneck.', features: ['Single-use workflow', 'Clean responsive interface', 'Core business logic', 'Basic data handling', 'Handover and training'] },
      { name: 'Business', price: '$X,XXX', summary: 'A connected tool for teams, clients or daily operations.', features: ['Multi-step workflow', 'User access controls', 'Dashboard or reporting', 'Key software integration', '30-day support'], popular: true },
      { name: 'Advanced', price: 'Custom', summary: 'A powerful platform for complex processes and scale.', features: ['Custom system architecture', 'Multiple user roles', 'Advanced integrations', 'Automation and analytics', 'Ongoing improvement plan'] },
    ],
  },
  {
    label: 'Automation Pricing',
    title: 'More output. Less manual work.',
    description: 'Reliable automations that return time to your team every week.',
    image: '/images/pricing-automation.webp',
    plans: [
      { name: 'Starter', price: '$X,XXX', summary: 'Automate one repetitive process with fast, clear impact.', features: ['One core workflow', 'Up to 2 app connections', 'Error handling setup', 'Team walkthrough', '14-day monitoring'] },
      { name: 'Business', price: '$X,XXX', summary: 'Connect the workflows that keep your business moving.', features: ['Up to 3 workflows', 'Multiple app connections', 'Email or CRM automation', 'Performance dashboard', '30-day optimization'], popular: true },
      { name: 'Advanced', price: 'Custom', summary: 'End-to-end automation for complex, high-volume operations.', features: ['Automation strategy', 'AI-powered workflows', 'Custom integrations', 'Advanced monitoring', 'Ongoing support options'] },
    ],
  },
]

export function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title={<>Clear scope.<br /><span className="hero-accent-text">Serious value.</span></>} description="Choose the solution that matches your stage. Every package is focused on saving time, reducing waste and creating a clear return for your business." note="Final pricing follows a free discovery call" />

      <div className="bg-[#f5f7fc]">
        {pricingGroups.map((group, groupIndex) => (
          <section key={group.label} className={`py-20 md:py-28 ${groupIndex > 0 ? 'border-t border-zinc-200' : ''}`}>
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">
              <div className="grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
                <SectionIntro eyebrow={group.label} title={group.title} description={group.description} />
                <Reveal delay={0.06} className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_24px_65px_rgba(35,50,100,.14)]">
                  <img src={group.image} alt={`${group.label} solution preview`} loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
                </Reveal>
              </div>
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {group.plans.map((plan, index) => (
                  <Reveal key={plan.name} delay={index * 0.05} className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 md:p-8 ${plan.popular ? 'border-cyan-400/30 bg-gradient-to-br from-[#091b40] via-[#25275f] to-[#0d4d5d] text-white shadow-[0_30px_80px_rgba(29,46,100,.3)]' : index === 0 ? 'card-tint-indigo' : 'card-tint-cyan'}`}>
                    {plan.popular && <span className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em]">★ Most Popular</span>}
                    <CircleDollarSign className={`h-6 w-6 ${plan.popular ? 'text-cyan-300' : 'text-indigo-600'}`} />
                    <h3 className="mt-6 text-xl font-extrabold">{plan.name}</h3>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-4xl font-extrabold tracking-[-0.05em]">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className={`pb-1 text-xs ${plan.popular ? 'text-zinc-500' : 'text-zinc-400'}`}>/ project</span>}
                    </div>
                    <p className={`mt-5 min-h-14 text-sm leading-6 ${plan.popular ? 'text-zinc-400' : 'text-zinc-600'}`}>{plan.summary}</p>
                    <ul className={`mt-7 flex-1 space-y-3 border-t pt-6 ${plan.popular ? 'border-white/10' : 'border-zinc-100'}`}>
                      {plan.features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-3 text-sm ${plan.popular ? 'text-zinc-300' : 'text-zinc-700'}`}><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />{feature}</li>
                      ))}
                    </ul>
                    <Link to={`/contact?service=${encodeURIComponent(group.label)}&plan=${encodeURIComponent(plan.name)}`} className={`mt-8 justify-center ${plan.popular ? 'button-primary' : 'button-outline'}`}>{plan.name === 'Pro' ? 'Choose Pro →' : plan.price === 'Custom' ? "Let’s Build Together →" : `Choose ${plan.name} →`}</Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection eyebrow="See it before you decide" title="Request a free, focused demo." description="Show us the problem. We will outline how the right website, tool or automation could solve it and what your business stands to gain." primary="Request Free Demo" primaryTo="/contact?demo=true" />
    </>
  )
}
