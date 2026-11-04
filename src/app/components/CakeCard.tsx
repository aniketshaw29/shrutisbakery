import { motion } from 'motion/react'
import { Plus } from 'lucide-react'

import type { Cake } from '../../data/site'
import { asset } from '../../lib/asset'

/** One photograph on the cake shelf. Clicking it opens the full picture. */
export function CakeCard({ cake, index, onOpen }: { cake: Cake; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="mb-6 break-inside-avoid sm:mb-8"
    >
      <button type="button" onClick={onOpen} className="group block w-full cursor-pointer text-left" aria-label={`View ${cake.title}`}>
        <div className="relative overflow-hidden rounded-[20px]" style={{ background: cake.tint }}>
          <img
            src={asset(cake.image)}
            alt={cake.alt}
            loading="lazy"
            className="block w-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
          />
          <span className="pointer-events-none absolute inset-0 bg-fg/0 transition-colors duration-500 group-hover:bg-fg/10" />
          <span className="round pointer-events-none absolute right-3 top-3 grid size-9 scale-90 place-items-center rounded-full bg-bg/90 text-fg opacity-0 backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <Plus className="size-4" />
          </span>
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-[21px] leading-[1.15]">{cake.title}</h3>
          <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-faint">{cake.category}</span>
        </div>
      </button>
    </motion.div>
  )
}
