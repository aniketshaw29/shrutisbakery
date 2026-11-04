import { motion } from 'motion/react'
import { Plus } from 'lucide-react'

import type { ArchiveCake } from '../../data/archive'
import { asset } from '../../lib/asset'

/** One photograph in the archive wall: picture first, occasion underneath. */
export function ArchiveCard({ cake, index, onOpen }: { cake: ArchiveCake; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -4% 0px' }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full cursor-pointer text-left"
      >
        <div className="relative aspect-square overflow-hidden rounded-[14px] bg-surface">
          <img
            src={asset(cake.image)}
            alt={cake.alt}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 bg-fg/0 transition-colors duration-500 group-hover:bg-fg/10" />
          <span className="round pointer-events-none absolute right-2.5 top-2.5 grid size-8 scale-90 place-items-center rounded-full bg-bg/90 text-fg opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <Plus className="size-3.5" />
          </span>
        </div>
        <p className="mt-2 text-[10.5px] uppercase tracking-[0.14em] text-faint">{cake.occasion}</p>
      </button>
    </motion.div>
  )
}
