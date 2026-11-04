import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { site } from '../../data/site'
import { asset } from '../../lib/asset'
import { cx } from '../lib/cx'

const sections = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'archive', label: 'Archive' },
  { id: 'about', label: 'The baker' },
  { id: 'hello', label: 'Say hello' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState(() => (typeof window === 'undefined' ? '' : window.location.hash))

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > last && y > 180)
      if (y > last) setOpen(false)
      last = y
    }
    const onHash = () => {
      setHash(window.location.hash)
      setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHash)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-40 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-transparent',
        hidden && !open && '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <img
            src={asset('/logo.jpg')}
            alt=""
            className="size-9 rounded-full object-cover ring-1 ring-line-strong sm:size-10"
          />
          <span className="font-display hidden text-[19px] sm:inline sm:text-[21px]">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cx(
                'link-draw py-3 text-[13.5px] transition-colors',
                hash === `#${section.id}` ? 'text-fg' : 'text-muted hover:text-fg',
              )}
            >
              {section.label}
            </a>
          ))}
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-1.5 text-[13px] text-fg transition-colors hover:border-fg"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 grid size-11 place-items-center rounded-full text-fg transition-colors hover:bg-surface md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 pb-5 pt-2 sm:px-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className={cx(
                  'border-b border-line py-3.5 text-[16px] transition-colors',
                  hash === `#${section.id}` ? 'text-fg' : 'text-muted hover:text-fg',
                )}
              >
                {section.label}
              </a>
            ))}
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-[14.5px] font-medium text-bg"
            >
              <MessageCircle className="size-4" />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
