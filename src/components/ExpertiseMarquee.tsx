import { Asterisk } from 'lucide-react'

const items = ['Web Design', 'Creative Development', 'Video & Reels', 'Social Content', 'Digital Marketing', 'AI Automation']

export function ExpertiseMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#091a38] py-5 text-white">
      <div className="marquee-track flex min-w-max items-center gap-7">
        {[...items, ...items].map((item, index) => <div key={`${item}-${index}`} className="flex items-center gap-7"><span className="font-display-serif text-2xl italic text-white/80 md:text-3xl">{item}</span><Asterisk className="h-5 w-5 text-cyan-300" /></div>)}
      </div>
    </div>
  )
}
