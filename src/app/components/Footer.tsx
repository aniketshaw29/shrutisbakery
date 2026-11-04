import { ArrowUpRight } from 'lucide-react'

import { site } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <p className="font-display text-[20px]">{site.name}</p>
            <p className="text-[12.5px] text-faint">
              {site.tagline} by {site.by}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            <a href={`mailto:${site.email}`} className="link-draw text-muted transition-colors hover:text-fg">
              {site.email}
            </a>
            <a
              href={site.instagram.href}
              className="link-draw inline-flex items-center gap-1 text-muted transition-colors hover:text-fg"
            >
              {site.instagram.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          </nav>

          <p className="text-[12px] text-faint">
            Baked in {site.location} · © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
