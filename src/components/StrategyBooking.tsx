import { useMemo, useState, type FormEvent } from 'react'
import { CalendarDays, CheckCircle2, Clock3, Video } from 'lucide-react'
import { Reveal, SectionIntro } from './UI'

function availableDays() {
  const days: Date[] = []
  const cursor = new Date()
  cursor.setDate(cursor.getDate() + 1)
  while (days.length < 6) {
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) days.push(new Date(cursor))
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

const times = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM']

export function StrategyBooking() {
  const days = useMemo(() => availableDays(), [])
  const [day, setDay] = useState(0)
  const [time, setTime] = useState('11:30 AM')
  const [booked, setBooked] = useState<{ name: string; email: string } | null>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const booking = { name: String(data.get('bookingName')), email: String(data.get('bookingEmail')) }
    localStorage.setItem('webpixel-strategy-call', JSON.stringify({ ...booking, date: days[day].toISOString(), time }))
    setBooked(booking)
  }

  function downloadCalendarInvite() {
    const date = new Date(days[day])
    const [clock, period] = time.split(' ')
    const [rawHour, minute] = clock.split(':').map(Number)
    const hour = period === 'PM' && rawHour !== 12 ? rawHour + 12 : period === 'AM' && rawHour === 12 ? 0 : rawHour
    date.setHours(hour, minute, 0, 0)
    const end = new Date(date.getTime() + 30 * 60 * 1000)
    const format = (value: Date) => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
    const calendar = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${format(date)}\nDTEND:${format(end)}\nSUMMARY:WebPixel Free Strategy Call\nDESCRIPTION:30-minute digital growth strategy session with WebPixel Digital Agency.\nEND:VEVENT\nEND:VCALENDAR`
    const url = URL.createObjectURL(new Blob([calendar], { type: 'text/calendar' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'webpixel-strategy-call.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="booking" className="scroll-mt-24 border-b border-slate-200 bg-[#eef3fb] py-20 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
        <div>
          <SectionIntro eyebrow="Instant calendar booking" title="Choose a time. Get a clear growth plan." description="Book a focused 30-minute strategy call. We will review your goal, answer key questions and recommend the best next step." />
          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <p className="flex items-center gap-3"><Video className="h-4 w-4 text-indigo-600" /> 30-minute online strategy session</p>
            <p className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-indigo-600" /> Clear scope, timeline and budget guidance</p>
            <p className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-indigo-600" /> Instant booking confirmation</p>
          </div>
        </div>
        <Reveal delay={0.08} className="card-tint-indigo rounded-[1.75rem] p-6 md:p-8">
          {booked ? (
            <div className="grid min-h-[430px] place-items-center text-center">
              <div className="max-w-md"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 className="h-8 w-8" /></span><h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em]">Your strategy call is reserved.</h3><p className="mt-3 text-sm leading-7 text-slate-600">Thanks, {booked.name}. We have saved {days[day].toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {time} for {booked.email}.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><button type="button" onClick={downloadCalendarInvite} className="button-primary justify-center">Add to Calendar</button><button type="button" onClick={() => setBooked(null)} className="button-outline justify-center">Choose another time</button></div></div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-600">1. Select a day</p>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {days.map((date, index) => <button key={date.toISOString()} type="button" onClick={() => setDay(index)} className={`rounded-xl border px-2 py-3 text-center transition-all ${day === index ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg' : 'border-indigo-200/70 bg-white/50 text-slate-700 hover:border-indigo-400'}`}><span className="block text-[9px] font-bold uppercase">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span><strong className="mt-1 block text-lg">{date.getDate()}</strong></button>)}
              </div>
              <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.16em] text-indigo-600">2. Select a time</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {times.map((slot) => <button key={slot} type="button" onClick={() => setTime(slot)} className={`rounded-xl border px-3 py-3 text-xs font-bold transition-all ${time === slot ? 'border-cyan-500 bg-cyan-500 text-[#07142d]' : 'border-indigo-200/70 bg-white/50 text-slate-700 hover:border-indigo-400'}`}>{slot}</button>)}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2"><input required name="bookingName" className="rounded-xl border border-indigo-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-indigo-500" placeholder="Your name" /><input required name="bookingEmail" type="email" className="rounded-xl border border-indigo-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-indigo-500" placeholder="Work email" /></div>
              <button type="submit" className="button-primary mt-5 w-full justify-center py-4">Confirm Free Strategy Call</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
