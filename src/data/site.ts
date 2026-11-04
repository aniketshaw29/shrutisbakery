// Everything about the bakery lives here. The pages read from this file.

import type { Occasion } from './archive'

export const site = {
  name: "Shruti's Bakery",
  by: 'Shruti Singh',
  tagline: 'Homemade cakes, baked to order',
  location: 'Sodepur & Agarpara, Kolkata, India',
  areas: 'Sodepur & Agarpara',
  // Leave empty to hide the email link and send people to WhatsApp instead.
  email: '',
  instagram: { label: 'Instagram', handle: '@shrutisbakery', href: 'https://www.instagram.com/shrutisbakery/' },
  whatsapp: {
    number: '918910206294',
    display: '+91 89102 06294',
    href: `https://wa.me/918910206294?text=${encodeURIComponent('Hi Shruti, I would like to order a cake.')}`,
  },
  hero: {
    intro:
      'Celebration cakes, character cakes, photo cakes and sugar-free cakes, baked to order in my own kitchen in Sodepur, just down the road from Agarpara. No price lists, no menus — just photographs of what came out of the oven, and a few words about each one.',
    caption: 'Roses, gold leaf and rather a lot of buttercream.',
  },
  flavours: [
    'birthdays',
    'anniversaries',
    'rakhi',
    "teacher's day",
    "mother's day",
    'first birthdays',
    'custom toppers',
    'character cakes',
    'photo cakes',
    'fresh cream',
    'sugar-free cakes',
    'celebration cakes',
  ],
  kitchenNote:
    'Baked in a home kitchen, so I cannot promise a nut-free space. Everything contains gluten, eggs and dairy.',
}

export type Category = 'Celebration cakes' | 'Character cakes' | 'Personalised' | Occasion

export const categories: Category[] = ['Celebration cakes', 'Character cakes', 'Personalised']

export interface Cake {
  slug: string
  title: string
  category: Category
  image: string
  alt: string
  tint: string
  note: string
}

export const cakes: Cake[] = [
  {
    slug: 'butterfly-two-tier',
    title: 'Butterfly two-tier',
    category: 'Celebration cakes',
    image: '/images/butterfly-tier.jpg',
    alt: 'A two-tier lilac and cream cake with sugar butterflies, piped ruffles and silver baubles',
    tint: '#e8dfee',
    note: 'Two tiers in lilac and cream, with piped ruffles, sugar butterflies and a little gold leaf.',
  },
  {
    slug: 'snehas-cake',
    title: 'Sneha’s cake',
    category: 'Personalised',
    image: '/images/snehas-cake.jpg',
    alt: 'A white cake scattered with pink lilies and candles, with Sneha written on the board',
    tint: '#e6d6d1',
    note: 'One tier, scattered with lilies, pearls and candles, with her name on the board.',
  },
  {
    slug: 'happy-birthday-ruffles',
    title: 'Happy Birthday ruffles',
    category: 'Celebration cakes',
    image: '/images/birthday-ruffles.jpg',
    alt: 'A cake with purple ruffled buttercream, gold sprinkles and Happy Birthday piped in red',
    tint: '#e9e2ef',
    note: 'Buttercream piped into a purple ruff, gold sprinkles and a hand-piped message in the middle.',
  },
  {
    slug: 'cat-cake',
    title: 'Cat cake',
    category: 'Character cakes',
    image: '/images/cat-cake.jpg',
    alt: 'A round cake piped into a brown cat face with a small yellow flower',
    tint: '#e7dbd1',
    note: 'A whole cake piped into a cat, whiskers and flower included. Not the easiest shape to ice.',
  },
  {
    slug: 'photo-topper-birthday',
    title: 'Photo-topper birthday',
    category: 'Personalised',
    image: '/images/photo-topper.jpg',
    alt: 'A round cake with a printed photo topper, a ribbon banner and piped red hearts',
    tint: '#efe7e3',
    note: 'A printed topper and a ribbon banner, with piped hearts around the edge. The photo does most of the work.',
  },
  {
    slug: 'kuchuu-puchhu',
    title: 'Kuchuu Puchhu',
    category: 'Personalised',
    image: '/images/kuchu-puchhu.jpg',
    alt: 'A white cake with red lettering reading Kuchuu Puchhu, red hearts and a ribbon bow',
    tint: '#f0e3e2',
    note: 'Whipped cream, a ruffled border and two names in red, with a ribbon at the base.',
  },
  {
    slug: 'for-maa',
    title: 'For Maa',
    category: 'Celebration cakes',
    image: '/images/maa-cake.jpg',
    alt: 'A cream cake with Maa piped in pink, yellow ruffles and a sugar butterfly',
    tint: '#f2e8cf',
    note: 'Fresh cream, a sugar butterfly and “Maa” in pink, made for Mother’s Day.',
  },
  {
    slug: 'butterfly-logo-topper',
    title: 'Butterfly and logo topper',
    category: 'Celebration cakes',
    image: '/images/butterfly-logo.jpg',
    alt: 'A pink cake with piped roses, gold-flecked butterflies and a round Shruti\u2019s Bakery logo topper',
    tint: '#f6dde2',
    note: 'Pink on pink: ruffled roses, sugar butterflies and a printed topper with the bakery logo.',
  },
  {
    slug: 'princess-doll-cake',
    title: 'Princess doll cake',
    category: 'Character cakes',
    image: '/images/princess-doll.jpg',
    alt: 'A two-tier pink and lilac cake with a doll topper, piped roses and wafer butterflies',
    tint: '#f2dcdf',
    note: 'Two tiers in pink and lilac with a doll topper, piped roses and wafer-paper butterflies.',
  },
]

export const about = {
  title: 'One oven, one pair of hands',
  lead: 'I am Shruti. I bake celebration cakes to order across Sodepur and Agarpara, Kolkata — piped by hand, named on top, and made for one occasion at a time.',
  body: [
    'Shruti’s Bakery is a small operation: one kitchen, one oven and a stand mixer, plus a counter where the finished cakes get their photograph taken.',
    'The cakes here are made to order — birthdays, anniversaries, Rakhi, Teacher’s Day, Mother’s Day and the occasional joke cake. Buttercream, fresh cream, edible print toppers and names iced by hand. Sugar-free cakes are made on request.',
    'Every photograph on this page is a cake that went out to someone. If you would like one, tell me the occasion and the name you want on top.',
  ],
  facts: [
    { title: 'Made to order', body: 'Every cake is baked for its occasion, not pulled off a shelf.' },
    { title: 'Finished by hand', body: 'Buttercream, fresh cream, names and toppers, all done here.' },
    { title: 'Local', body: 'Baked in Sodepur and Agarpara, Kolkata, India — delivered, or collected from my home in Agarpara.' },
  ],
}

export const hello = {
  title: 'Fancy one of these?',
  body: 'I take orders online, and every cake is either delivered or collected from my home in Agarpara. Tell me the occasion, the name you want on top and roughly how many people. Sugar-free cakes are available on request. The quickest way is a WhatsApp message on the number below — I will tell you honestly what is possible and when I can fit it in.',
}
