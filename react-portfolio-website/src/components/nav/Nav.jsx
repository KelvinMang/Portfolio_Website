import React, { useEffect, useState } from 'react'
import './nav.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#ventures', label: 'Ventures' },
  { href: '#about', label: 'About' },
  { href: '#insights', label: 'Insights' }
]

const sectionIds = ['home', 'ventures', 'about', 'insights', 'work']

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  const go = (href) => {
    setActive(href)
    setOpen(false)
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`topnav${open ? ' topnav--open' : ''}`} aria-label="Primary">
      <div className="container topnav__inner">
        <a href="#home" className="topnav__brand" onClick={() => go('#home')}>
          Kelvin Mang
        </a>

        <button
          className="topnav__toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-navigation" className="topnav__links">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={active === href ? 'active' : ''}
              aria-current={active === href ? 'page' : undefined}
              onClick={() => go(href)}
            >
              {label}
            </a>
          ))}
          <a
            href="#work"
            className={`btn btn-primary topnav__cta${active === '#work' ? ' active' : ''}`}
            onClick={() => go('#work')}
          >
            Work With Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
