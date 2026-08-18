import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://webpixel-digital-agency.vercel.app'

const pages: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'WebPixel Digital Agency — Websites Built for Growth',
    description: 'Fast, mobile-first websites, content and digital campaigns designed to generate leads and grow your business.',
  },
  '/services': {
    title: 'Digital Growth Services — WebPixel Digital Agency',
    description: 'Explore website development, video editing, social content, digital marketing, AI automation and custom business tools.',
  },
  '/pricing': {
    title: 'Website, Tool & Automation Pricing — WebPixel',
    description: 'Clear digital service packages for small businesses, growing companies and professional brands.',
  },
  '/about': {
    title: 'About WebPixel — Strategy, Design & Technology',
    description: 'Meet the digital growth team helping businesses save time, improve customer experience and scale with confidence.',
  },
  '/contact': {
    title: 'Book a Free Strategy Call — WebPixel Digital Agency',
    description: 'Book a free strategy call or tell WebPixel about your website, content, marketing or automation project.',
  },
}

function setMeta(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector)
  if (element) element.content = content
}

export function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] ?? {
      title: 'Page Not Found — WebPixel Digital Agency',
      description: 'Return to WebPixel Digital Agency to explore websites, content, marketing and automation services.',
    }
    document.title = page.title
    setMeta('meta[name="description"]', page.description)
    setMeta('meta[property="og:title"]', page.title)
    setMeta('meta[property="og:description"]', page.description)
    setMeta('meta[name="twitter:title"]', page.title)
    setMeta('meta[name="twitter:description"]', page.description)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${siteUrl}${pathname === '/' ? '' : pathname}`
  }, [pathname])

  return null
}
