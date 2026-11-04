import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import type { Cake } from '../../data/site'
import { asset } from '../../lib/asset'

const ease = [0.22, 1, 0.36, 1] as const

/**
 * Full-screen view of a single cake, with the rest of the shelf either side.
 * The fade-out is handled here so the parent can unmount it straight after.
 */
export function Lightbox({
  cake,
  index,
  total,
  label = 'The cake shelf',
  onClose,
  onPrev,
  onNext,
}: {
  cake: Cake
  index: number
  total: number
  label?: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [closing, setClosing] = useState(false)

  const requestCloseRef = useRef(() => {})
  requestCloseRef.current = () => {
    if (closing) return
    setClosing(true)
    window.setTimeout(onClose, 200)
  }

  const prevRef = useRef(onPrev)
  prevRef.current = onPrev
  const nextRef = useRef(onNext)
  nextRef.current = onNext

  useEffect(() => {
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestCloseRef.current()
      if (event.key === 'ArrowLeft') prevRef.current()
      if (event.key === 'ArrowRight') nextRef.current()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const arrow = 'round grid size-11 shrink-0 place-items-center rounded-full border border-line-strong bg-bg/80 text-fg backdrop-blur transition-colors hover:border-fg hover:bg-fg hover:text-bg'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: closing ? 0.2 : 0.3, ease }}
      role="dialog"
      aria-modal="true"
      aria-label={cake.title}
      className="fixed inset-0 z-[60] flex flex-col bg-bg/97 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-8">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
          {label} <span className="ml-2 tabular-nums text-faint">{index + 1} / {total}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={() => requestCloseRef.current()}
          className="-mr-2 inline-flex min-h-11 items-center gap-1.5 px-2 text-[13px] text-muted transition-colors hover:text-fg"
        >
          Close
          <X className="size-4" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-3 overflow-y-auto px-3 py-6 sm:gap-8 sm:px-8">
        <button type="button" onClick={() => prevRef.current()} className={`${arrow} hidden sm:grid`} aria-label="Previous cake">
          <ChevronLeft className="size-5" />
        </button>

        <motion.figure
          key={cake.slug}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease }}
          className="flex min-h-0 flex-col items-center"
        >
          <img
            src={asset(cake.image)}
            alt={cake.alt}
            className="max-h-[63svh] w-auto max-w-full rounded-[16px] object-contain sm:max-h-[68svh]"
            style={{ background: cake.tint }}
          />
          <figcaption className="mt-5 max-w-xl px-2 text-center">
            <p className="text-[11px] uppercase tracking-[0.16em] text-faint">{cake.category}</p>
            <h2 className="font-display mt-1.5 text-[26px] leading-tight sm:text-[32px]">{cake.title}</h2>
            <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-muted">{cake.note}</p>
          </figcaption>
        </motion.figure>

        <button type="button" onClick={() => nextRef.current()} className={`${arrow} hidden sm:grid`} aria-label="Next cake">
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 pb-6 sm:hidden">
        <button type="button" onClick={() => prevRef.current()} className={arrow} aria-label="Previous cake">
          <ChevronLeft className="size-5" />
        </button>
        <button type="button" onClick={() => nextRef.current()} className={arrow} aria-label="Next cake">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </motion.div>
  )
}
