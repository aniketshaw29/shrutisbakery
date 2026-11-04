// Everything about the bakery lives here. The pages read from this file.

export const site = {
  name: 'Honey & Crumb',
  by: 'Shurti Singh',
  tagline: 'Homemade cakes, baked in small batches',
  location: 'Sodepur, Kolkata',
  areas: 'Sodepur & Agarpara',
  email: 'hello@honeyandcrumb.com',
  instagram: { label: 'Instagram', href: 'https://instagram.com' },
  hero: {
    intro:
      'Layer cakes, loaf cakes and cupcakes baked in my own kitchen in Sodepur. No price lists, no menus — just photographs of what came out of the oven, and a few words about each one.',
    caption: 'Sifting the flour. Twice, if I am honest.',
  },
  flavours: [
    'brown butter',
    'malted chocolate',
    'lemon & thyme',
    'raspberry ripple',
    'cardamom',
    'vanilla bean',
    'toasted hazelnut',
    'burnt sugar',
  ],
  kitchenNote:
    'Baked in a home kitchen, so I cannot promise a nut-free space. Everything contains gluten, eggs and dairy.',
}

export type Category = 'Layer cakes' | 'Loaves & traybakes' | 'Cupcakes' | 'Celebrations'

export const categories: Category[] = ['Layer cakes', 'Loaves & traybakes', 'Cupcakes', 'Celebrations']

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
    slug: 'black-forest',
    title: 'Black Forest, more or less',
    category: 'Layer cakes',
    image: '/images/chocolate-cherry.jpg',
    alt: 'A three-layer chocolate cake dripping with ganache, cream and dark cherries',
    tint: '#e6d3c4',
    note: 'Dark cocoa sponge, brandy-soaked cherries and cream I whipped a little too far. Better for it.',
  },
  {
    slug: 'lemon-yoghurt-loaf',
    title: 'Lemon yoghurt loaf',
    category: 'Loaves & traybakes',
    image: '/images/lemon-loaf.jpg',
    alt: 'A golden lemon loaf on crinkled baking paper beside halved lemons',
    tint: '#efe0c0',
    note: 'Unwaxed lemon, thick yoghurt and a crackly sugar top. My most-requested loaf, and the easiest to make on a Wednesday.',
  },
  {
    slug: 'brown-butter-traybake',
    title: 'Brown-butter traybake',
    category: 'Loaves & traybakes',
    image: '/images/vanilla-traybake.jpg',
    alt: 'Squares of brown-butter sponge with thick icing on a lined baking tray',
    tint: '#e9ddcb',
    note: 'Cut into squares and iced thickly. The cake that vanishes fastest at family things, usually before the tea is made.',
  },
  {
    slug: 'birthday-drip',
    title: 'Birthday drip',
    category: 'Celebrations',
    image: '/images/birthday-drip.jpg',
    alt: 'A pink funfetti layer cake with a white chocolate drip and an ice cream cone on top',
    tint: '#f0dad8',
    note: 'Funfetti layers under pink white chocolate, for a nine-year-old with very firm opinions about sprinkles.',
  },
  {
    slug: 'summer-berry-slice',
    title: 'Summer berry slice',
    category: 'Layer cakes',
    image: '/images/berry-slice.jpg',
    alt: 'A layered sponge slice topped with redcurrants, a raspberry and a blackberry',
    tint: '#f1e3e4',
    note: 'Vanilla sponge and whipped cream, with whatever looked best at the market that morning. This one was redcurrants.',
  },
  {
    slug: 'hazelnut-cupcake',
    title: 'Hazelnut praline cupcake',
    category: 'Cupcakes',
    image: '/images/hazelnut-cupcake.jpg',
    alt: 'A chocolate cupcake with hazelnut buttercream, a chocolate truffle and chopped nuts',
    tint: '#e3d5c5',
    note: 'Toasted hazelnut buttercream, a chocolate centre and a truffle on top. A bit much, in the best way.',
  },
  {
    slug: 'pink-party-cake',
    title: 'Pink buttercream party cake',
    category: 'Celebrations',
    image: '/images/pink-party-cake.jpg',
    alt: 'A pale blue cake with pink buttercream swirls and sprinkles around the base',
    tint: '#e7e6e0',
    note: 'Vanilla-buttermilk sponge, a very pink ruff and sprinkles all the way round the bottom. Made for a kitchen full of people.',
  },
  {
    slug: 'cherry-celebration',
    title: 'Cherry celebration cake',
    category: 'Celebrations',
    image: '/images/cherry-celebration.jpg',
    alt: 'A three-tier white cake with retro piped swags and glacé cherries',
    tint: '#eeeae3',
    note: 'Three tiers of retro piping and glacé cherries, borrowed almost entirely from my grandmother’s handwriting.',
  },
  {
    slug: 'cocoa-olive-oil',
    title: 'Cocoa olive-oil cake',
    category: 'Layer cakes',
    image: '/images/cocoa-cake.jpg',
    alt: 'Cocoa being dusted through a sieve onto a dark chocolate cake',
    tint: '#dcc9bd',
    note: 'One bowl, one whisk, a lot of cocoa. Best eaten warm, standing up, with the sieve still in your hand.',
  },
]

export const about = {
  title: 'One oven, one pair of hands',
  lead: 'I am Shurti, and I bake the kind of cakes I want to eat: proper butter, fruit in season, and not so much sugar that you cannot taste the rest.',
  body: [
    'I am not a bakery. I am one person in Sodepur with a stand mixer, a small oven and a habit of volunteering to bring the cake.',
    'Everything here is made to order in my kitchen in Sodepur, a short drive from Agarpara — usually one or two a week, around a day job and a small person who likes to lick the spoon. It means I can take my time over the parts that matter: creaming the butter properly, waiting for the fruit, taking the sponge out a minute earlier than feels safe.',
    'The photographs are of real cakes, baked here and eaten by someone. Nothing is bought in, and nothing is styled beyond clearing the dishes off the table.',
  ],
  facts: [
    { title: 'Small batches', body: 'One or two cakes a week, never more than the oven can do properly.' },
    { title: 'Real ingredients', body: 'Block butter, free-range eggs, proper chocolate, fruit from the market.' },
    { title: 'Made to order', body: 'Tell me the occasion and the flavours you like, and I will suggest the cake.' },
  ],
}

export const hello = {
  title: 'Fancy one of these?',
  body: 'Tell me the occasion, the flavours you like and roughly how many people. I will tell you honestly what is possible, what is in season and when I can fit it in.',
}
