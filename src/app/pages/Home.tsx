import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'

import { about, cakes, categories, hello, site, type Category } from '../../data/site'
import { CakeCard } from '../components/CakeCard'
import { InstagramIcon } from '../components/icons'
import { Lightbox } from '../components/Lightbox'
import { Lines, Magnetic, Reveal } from '../components/motion'
import { asset } from '../../lib/asset'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

type Filter = 'All' | Category

export function Home() {
  const [filter, setFilter] = useState<Filter>('All')
  const [opened, setOpened] = useState<number | null>(null)

  const shelf = filter === 'All' ? cakes : cakes.filter((cake) => cake.category === filter)
  const openCake = opened === null ? null : shelf[opened]

  const step = (direction: 1 | -1) => {
    if (opened === null) return
    setOpened((opened + direction + shelf.length) % shelf.length)
  }

  return (
    <>
      <Hero />

      {/* Flavours, drifting past */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display-italic flex w-max animate-marquee items-center gap-8 whitespace-nowrap text-[24px] text-fg/55 sm:text-[30px]">
          {[...site.flavours, ...site.flavours].map((flavour, i) => (
            <li key={i} className="flex items-center gap-8">
              {flavour}
              <span className="round size-1.5 rounded-full bg-accent/70" />
            </li>
          ))}
        </ul>
      </div>

      {/* The cake shelf */}
      <section id="cakes" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-faint">01 — The cake shelf</p>
            <Lines as="h2" className="font-display mt-3 text-[clamp(42px,6vw,76px)]" lines={['Recent bakes']} />
          </div>
          <Reveal delay={0.1} className="max-w-sm text-pretty text-[14.5px] leading-relaxed text-muted">
            Photographs, not a menu. No prices, no tiers to choose from — just what came out of the oven, and what was in it.
          </Reveal>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          {(['All', ...categories] as Filter[]).map((option) => {
            const active = filter === option
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(option)
                  setOpened(null)
                }}
                className={cx(
                  'h-9 rounded-full border px-4 text-[13px] transition-colors duration-300',
                  active ? 'border-fg bg-fg text-bg' : 'border-line-strong text-muted hover:border-fg hover:text-fg',
                )}
              >
                {option}
              </button>
            )
          })}
        </div>

        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease }}
          className="mt-8 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6"
        >
          {shelf.map((cake, index) => (
            <CakeCard key={cake.slug} cake={cake} index={index} onOpen={() => setOpened(index)} />
          ))}
        </motion.div>

        <Reveal className="flex flex-col items-start justify-between gap-3 border-t border-line pt-5 text-[13.5px] text-muted sm:flex-row sm:items-center">
          <p>New cakes most weeks. Follow along for the latest updates, usually still warm.</p>
          <a
            href={site.instagram.href}
            target="_blank"
            rel="noreferrer"
            className="link-draw inline-flex items-center gap-1.5 font-medium text-fg"
          >
            <InstagramIcon className="size-4" />
            Follow for new bakes
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </section>

      {/* The baker */}
      <section id="about" className="mt-24 scroll-mt-20 border-y border-line bg-surface/70 sm:mt-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="image-frame aspect-[4/5] overflow-hidden rounded-[24px]">
              <img
                src={asset('/images/about-counter.jpg')}
                alt="The Shruti's Bakery counter with a character face cake and cupcakes on the shelves behind"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-display-italic mt-3 text-[14px] text-muted">The counter, where every cake gets its photograph taken.</p>
          </Reveal>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-faint">02 — The baker</p>
            <Lines as="h2" className="font-display mt-3 text-[clamp(38px,5.4vw,68px)]" lines={['One oven,', 'one pair of hands']} />
            <Reveal delay={0.15} className="font-display mt-7 max-w-xl text-pretty text-[23px] leading-[1.3] text-fg/90 sm:text-[28px]">
              {about.lead}
            </Reveal>
            <Reveal delay={0.2} className="mt-5 flex max-w-xl flex-col gap-4 text-[15.5px] leading-relaxed text-muted">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.22} className="mt-7 flex items-center gap-3">
              <span className="font-display-italic text-[24px] text-accent">{site.by.split(' ')[0]}</span>
              <span className="h-px w-8 bg-line-strong" />
              <span className="text-[12px] uppercase tracking-[0.14em] text-faint">Baking in {site.location}</span>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.title}>
                  <h3 className="font-display text-[17px]">{fact.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{fact.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Say hello */}
      <section id="hello" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="rounded-[32px] bg-fg px-6 py-12 text-bg sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-bg/45">03 — Cakes, made to order</p>
                <Lines as="h2" className="font-display mt-4 text-[clamp(40px,6vw,82px)]" lines={[hello.title]} />
                <Reveal delay={0.15} className="mt-6 max-w-lg text-pretty text-[15.5px] leading-relaxed text-bg/70">
                  {hello.body}
                </Reveal>
                <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Magnetic>
                    <a
                      href={site.whatsapp.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-bg px-7 py-3.5 text-[14.5px] font-medium text-fg transition-colors hover:bg-surface"
                    >
                      <MessageCircle className="size-4" />
                      Order on WhatsApp
                    </a>
                  </Magnetic>
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-draw inline-flex items-center gap-1.5 text-[14px] text-bg/65 transition-colors hover:text-bg"
                  >
                    <InstagramIcon className="size-4" />
                    Follow {site.instagram.handle}
                  </a>
                  <span className="text-[13px] tabular-nums text-bg/45">{site.whatsapp.display}</span>
                  {site.email && (
                    <a
                      href={`mailto:${site.email}`}
                      className="link-draw inline-flex items-center gap-1.5 text-[14px] text-bg/65 transition-colors hover:text-bg"
                    >
                      {site.email}
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                </Reveal>
                <Reveal delay={0.24} className="mt-7 max-w-md text-[12px] leading-relaxed text-bg/40">
                  {site.kitchenNote}
                </Reveal>
              </div>

              <Reveal delay={0.1} className="flex flex-col items-center gap-4 text-center lg:items-end lg:text-right">
                <img
                  src={asset('/logo.jpg')}
                  alt={`${site.name} logo: a cupcake and a dessert cup ringed with “Freshly baked with love”`}
                  className="size-[150px] rounded-full object-cover shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] ring-1 ring-bg/20"
                  loading="lazy"
                />
                <p className="font-display-italic text-[15px] text-bg/55">Freshly baked with love.</p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {openCake && (
        <Lightbox
          cake={openCake}
          index={opened ?? 0}
          total={shelf.length}
          onClose={() => setOpened(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.18em] text-muted"
            >
              <span className="round size-1.5 rounded-full bg-accent" />
              Homemade cakes by {site.by}
            </motion.p>

            <h1 className="font-display mt-5 text-[clamp(54px,9vw,122px)]">
              {[{ text: 'Cakes made' }, { text: 'by hand,', accent: true }, { text: 'at home.' }].map((line, i) => (
                <span key={line.text} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                  <motion.span
                    className={cx('block', line.accent && 'font-display-italic text-accent')}
                    initial={{ y: '108%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.05, delay: 0.2 + i * 0.11, ease }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.62, ease }}
              className="mt-8 max-w-md text-pretty text-[16px] leading-relaxed text-muted sm:text-[17px]"
            >
              {site.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.74, ease }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <a
                href="#cakes"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-[14px] font-medium text-bg transition-colors hover:bg-[#3b2a1e]"
              >
                See the cakes
                <ArrowDown className="size-4" />
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="link-draw inline-flex items-center gap-1.5 text-[14px] font-medium text-fg/80 hover:text-fg"
              >
                <MessageCircle className="size-4" />
                Order on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
            className="relative mx-auto w-full max-w-[520px] lg:mx-0"
          >
            <div className="image-frame aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[24px]">
              <img
                src={asset('/images/hero-pink-tier.jpg')}
                alt="A two-tier pink cake with buttercream roses and gold baubles, in front of the Shruti's Bakery sign"
                className="size-full object-cover"
              />
            </div>
            <p className="font-display-italic mt-3 text-right text-[14px] text-muted">{site.hero.caption}</p>
            <Stamp className="absolute -bottom-2 -left-2 sm:-left-8 sm:bottom-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 grid gap-3 border-t border-line py-6 text-[12.5px] text-muted sm:grid-cols-3"
        >
          <p>
            {site.areas}, Kolkata
          </p>
          <p className="sm:text-center">Celebration, character &amp; photo cakes</p>
          <p className="sm:text-right">Order on WhatsApp</p>
        </motion.div>
      </div>
    </section>
  )
}

/** A slow-spinning roundel, like a sticker on a cake box. */
function Stamp({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cx('round relative pointer-events-none size-[92px] rounded-full border border-line-strong bg-bg/95 sm:size-[108px]', className)}>
      <div className="animate-spin-slow size-full">
        <svg viewBox="0 0 100 100" className="size-full">
          <defs>
            <path id="stamp-path" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
          </defs>
          <text className="fill-fg/70 text-[8.2px] uppercase tracking-[0.2em]">
            <textPath href="#stamp-path">home baked · made to order · </textPath>
          </text>
        </svg>
      </div>
      <span className="font-display-italic absolute inset-0 grid place-items-center text-[17px] text-accent">SB</span>
    </div>
  )
}
