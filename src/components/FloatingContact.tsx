import { useState } from 'react'
import { CalendarDays, MessageCircle, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function FloatingContact() {
  const [open, setOpen] = useState(false)
  const message = encodeURIComponent('Hi WebPixel, I would like to discuss a digital project.')

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-64 rounded-2xl border border-white/10 bg-[#0a1733]/95 p-3 text-white shadow-[0_24px_70px_rgba(2,8,23,.38)] backdrop-blur-xl">
          <p className="px-2 pb-3 pt-1 text-xs font-extrabold">Start a quick conversation</p>
          <a href={`https://wa.me/?text=${message}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-emerald-500 px-4 py-3 text-xs font-extrabold transition-colors hover:bg-emerald-400"><MessageCircle className="h-4 w-4" /> Message on WhatsApp</a>
          <Link to="/contact?booking=true#booking" className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-extrabold transition-colors hover:bg-white/10" onClick={() => setOpen(false)}><CalendarDays className="h-4 w-4 text-cyan-300" /> Book a free call</Link>
        </div>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_16px_38px_rgba(16,185,129,.38)] transition-transform hover:scale-105" aria-label={open ? 'Close quick contact' : 'Open quick contact'}>{open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />} {!open && <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-cyan-300" />}</button>
    </div>
  )
}
