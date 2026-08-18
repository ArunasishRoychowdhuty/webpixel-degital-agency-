import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Services = lazy(() => import('./pages/Services').then((module) => ({ default: module.Services })))
const Pricing = lazy(() => import('./pages/Pricing').then((module) => ({ default: module.Pricing })))
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })))
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })))

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="grid min-h-[60vh] place-items-center bg-[#f5f7fc]"><div className="h-9 w-9 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" aria-label="Loading page" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
