import { Reveal, SectionIntro } from './UI'

const stack = [
  { name: 'React', mark: '⚛', note: 'Interactive interfaces', tone: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', mark: 'N', note: 'Reliable backends', tone: 'from-emerald-400 to-teal-500' },
  { name: 'Shopify', mark: 'S', note: 'E-commerce growth', tone: 'from-lime-400 to-emerald-500' },
  { name: 'Tailwind CSS', mark: '≈', note: 'Responsive design', tone: 'from-sky-400 to-cyan-500' },
  { name: 'Vercel', mark: '▲', note: 'Fast global delivery', tone: 'from-slate-700 to-slate-950' },
  { name: 'TypeScript', mark: 'TS', note: 'Quality at scale', tone: 'from-blue-500 to-indigo-600' },
]

export function TechStack() {
  return (
    <section className="bg-[#f5f7fc] py-20 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <SectionIntro eyebrow="Technology stack" title="Modern tools. Faster experiences." description="We choose proven technology for speed, security, easy management and long-term growth." />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {stack.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04} className={`group rounded-[1.35rem] p-4 transition-all hover:-translate-y-1 ${['card-tint-indigo', 'card-tint-cyan', 'card-tint-violet', 'card-tint-sky'][index % 4]}`}>
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${item.tone} text-sm font-black text-white shadow-lg transition-transform group-hover:-rotate-3 group-hover:scale-105`}>{item.mark}</span>
                <p className="mt-4 text-sm font-extrabold text-slate-950">{item.name}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">{item.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
