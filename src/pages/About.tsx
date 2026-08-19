import { BriefcaseBusiness, Check, Compass, Handshake, Headphones, Lightbulb, Paintbrush, Rocket, ShoppingBag, Sparkles, Store, Users, WandSparkles } from 'lucide-react'
import { CTASection, PageHero, Reveal, SectionIntro } from '../components/UI'

const team = [
  { icon: Compass, image: '/images/team-founder.webp', role: 'Founder & Strategy Lead', description: 'Turns business goals into clear digital priorities and practical growth plans.' },
  { icon: BriefcaseBusiness, image: '/images/team-developer.webp', role: 'Lead Web Developer', description: 'Builds fast, secure and scalable digital products that perform under pressure.' },
  { icon: Paintbrush, image: '/images/team-designer.webp', role: 'UI/UX Designer', description: 'Creates premium, intuitive experiences that build trust and guide action.' },
  { icon: WandSparkles, image: '/images/team-ai-specialist.webp', role: 'Automation & AI Specialist', description: 'Removes repetitive work with reliable workflows and smart AI systems.' },
  { icon: Headphones, image: '/images/team-project-manager.webp', role: 'Project Manager / Client Success', description: 'Keeps every project clear, on track and aligned with the result you need.' },
]

const industries = [
  { icon: Store, image: '/images/industry-local-business.webp', label: 'Local businesses' },
  { icon: Handshake, image: '/images/industry-service-business.webp', label: 'Service businesses' },
  { icon: ShoppingBag, image: '/images/industry-ecommerce.webp', label: 'E-commerce brands' },
  { icon: Sparkles, image: '/images/industry-agency.webp', label: 'Agencies' },
  { icon: Lightbulb, image: '/images/industry-consultant.webp', label: 'Coaches & consultants' },
  { icon: Rocket, image: '/images/industry-startup.webp', label: 'Startups' },
  { icon: Users, image: '/images/industry-smb.webp', label: 'Small & medium businesses' },
]

export function About() {
  return (
    <>
      <PageHero eyebrow="About WebPixel" title={<>Business first.<br /><span className="hero-accent-text">Technology second.</span></>} description="We are a digital growth agency for businesses that want to work smarter, serve customers better and scale without unnecessary complexity." note="A practical partner for long-term growth" />

      <section className="bg-[#f5f7fc] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionIntro eyebrow="Our mission" title="Make business smarter, faster and more efficient." />
            <Reveal className="mt-10 hidden lg:block">
              <div className="grid max-w-sm grid-cols-2 gap-3">
                {['Save time', 'Cut cost', 'Move faster', 'Grow clearly'].map((item, index) => <div key={item} className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-extrabold ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index]}`}><Check className="h-3.5 w-3.5 text-indigo-600" />{item}</div>)}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.08} className="space-y-6 text-lg leading-8 text-slate-600">
              <p>Too many businesses lose valuable time to disconnected tools, repetitive tasks and digital experiences that do not support growth. We exist to change that.</p>
              <p>WebPixel combines strategy, design, development and automation in one focused team. We look at the whole business, then build the clearest solution. That could be a conversion-ready website, a custom operations tool or an AI workflow that gives hours back every week.</p>
              <p className="font-semibold text-slate-900">Our goal is simple: create technology that earns its place in your business. It should lower cost, improve speed and make the next stage of growth easier to reach.</p>
            </Reveal>
            <Reveal delay={0.12} className="group relative mt-10 overflow-hidden rounded-[1.75rem] shadow-[0_24px_65px_rgba(38,55,110,.14)]">
              <img src="/images/agency-collaboration.webp" alt="WebPixel digital strategy team working together" loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07142d]/30 to-transparent" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#eef3fb] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="The team behind the work" title="Specialists with one shared focus: your result." description="Every role brings a different skill. Every decision stays connected to the same business goal." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member, index) => (
              <Reveal key={member.role} delay={index * 0.05} className={`group overflow-hidden rounded-2xl p-2 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(35,50,100,.15)] ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index % 4]}`}>
                <div className="relative overflow-hidden rounded-xl">
                  <img src={member.image} alt={`${member.role} at WebPixel Digital Agency`} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/65 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-[#07142d]/70 text-cyan-300 backdrop-blur"><member.icon className="h-4 w-4" /></span>
                </div>
                <div className="p-4">
                  <h3 className="min-h-12 text-base font-extrabold leading-6 tracking-[-0.02em]">{member.role}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07142d] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <SectionIntro eyebrow="Industries we serve" title="Built around how your business works." description="Different industries face different bottlenecks. We bring the digital capability, then shape it around your customers, team and goals." light />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.label} delay={(index % 4) * 0.04} className={`group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/10 ${index === industries.length - 1 ? 'lg:col-span-2' : ''}`}>
                <img src={industry.image} alt={industry.label} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07142d] via-[#07142d]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-cyan-400/15 text-cyan-200 backdrop-blur"><industry.icon className="h-4 w-4" /></span>
                  <span className="text-sm font-extrabold text-white">{industry.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Bring us the bottleneck. We will build the way through." description="Start with a business challenge, not a technical brief. We will help you shape the right solution and move forward with confidence." primary="Start Your Project" />
    </>
  )
}
