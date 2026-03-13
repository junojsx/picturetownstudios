import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work',     href: '#projects' },
  { label: 'About',   href: '#about'    },
  { label: 'Services',href: '#services' },
  { label: 'Contact', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo + wordmark */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/picturetown-mark.png"
              alt="PictureTown Studios logo"
              className="h-10 w-10 rounded-full object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-[11px] sm:text-xs md:text-sm tracking-[0.4em] uppercase">
                PICTURETOWN
              </span>
              <span className="font-display text-white text-[11px] sm:text-xs md:text-sm tracking-[0.4em] uppercase">
                STUDIOS
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-[11px] tracking-[0.28em] uppercase text-brand-silver/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex font-body text-[11px] tracking-widest uppercase font-semibold bg-brand-amber hover:bg-amber-500 text-brand-black px-5 py-2 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
            <button
              className="md:hidden text-brand-silver p-1"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black flex flex-col px-8 pt-24 pb-10 md:hidden">
          <nav className="flex flex-col gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-display text-5xl text-white hover:text-brand-amber transition-colors leading-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={close}
            className="mt-auto font-body text-sm tracking-widest uppercase font-semibold bg-brand-amber text-brand-black px-6 py-4 text-center"
          >
            Hire Me
          </a>
          <p className="font-body text-brand-silver/55 text-xs text-center mt-4">
            hello@picturetown.studio
          </p>
        </div>
      )}
    </>
  )
}
