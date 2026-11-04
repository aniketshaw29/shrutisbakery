import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { site } from '../../data/site'
import { cx } from '../lib/cx'

const sections = [
  { id: 'cakes', label: 'Cakes' },
  { id: 'about', label: 'The baker' },
  { id: 'hello', label: 'Say hello' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hash, setHash] = useState(() => (typeof window === 'undefined' ? '' : window.location.hash))

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > last && y > 180)
      last = y
    }
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-40 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        scrolled ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-transparent',
        hidden && '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-18 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2" aria-label={`${site.name} home`}>
          <span className="font-display text-[19px] sm:text-[21px]">{site.name}</span>
          <span className="round hidden size-1.5 rounded-full bg-accent sm:block" />
        </a>
        <nav className="flex items-center gap-4 sm:gap-7">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cx(
                'link-draw text-[13px] transition-colors sm:text-[13.5px]',
                hash === `#${section.id}` ? 'text-fg' : 'text-muted hover:text-fg',
              )}
            >
              {section.label}
            </a>
          ))}
          <a
            href={site.instagram.href}
            className="link-draw hidden items-center gap-1 text-[13.5px] text-muted transition-colors hover:text-fg sm:inline-flex"
          >
            Instagram
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>
      </div>
    </header>
  )
}
