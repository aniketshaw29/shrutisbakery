# Shruti's Bakery

Shruti Singh's home bakery site — Sodepur and Agarpara, Kolkata, India.

A photo display site for homemade cakes. No prices, no menus, no checkout:
a big warm hero, a filterable photo shelf that opens into a full-screen
lightbox, a short note from the baker, and a way to ask for a cake.

Every cake photograph is one of Shruti's, saved from
[instagram.com/shrutisbakery](https://www.instagram.com/shrutisbakery/). The
baker section uses a portrait from her personal profile (`public/images/shruti.jpg`).
There are no stock photos. Replace or add cake photos in `public/images/` and
update the matching entries in `src/data/site.ts`.

The logo in the header, footer and contact panel is her Instagram profile
picture (`public/logo.jpg`), also used for the favicon.

The newest cakes live in `src/data/site.ts` and appear on the featured shelf.
The rest of the photo archive is generated into `src/data/archive.ts` (101
entries, with occasion tags) and served from `public/archive/`; it loads twelve
at a time. Only grid photo posts are included — reels and story highlights are
not.

Sugar-free cakes are offered on request; the site says so in the hero, the
marquee, the baker section and the contact block.

Orders are online (WhatsApp is the main channel). Cakes are either delivered
or collected from Shruti's home in Agarpara; the baker section and contact
block say so.

Custom cakes are invited throughout: the hero mentions custom designs, the
baker copy asks for any idea that is not on the site, and the contact block
has a dedicated “Custom cakes” note.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run build      # dist/client (assets) + dist/honey_and_crumb/index.js (Worker)
```

## Make it yours

- `src/data/site.ts` is the whole site: the bakery name, baker, location,
  areas, Instagram, optional email, hero copy, the marquee list and the full
  cake list. Each cake has a title, a category, an image, alt text, a tint for
  the loading frame and a one-line note. Add one by dropping a photo in
  `public/images/` and appending an entry to `cakes`.
- Orders go to WhatsApp: the number lives in `site.whatsapp` in
  `src/data/site.ts`, and the link is a `wa.me` URL with a pre-filled first
  message. Change the number there and every order button follows. Instagram
  stays as the gallery link, and `site.email` (empty by default) adds an email
  button.
- `src/app/pages/Home.tsx` holds the hero, the shelf, the baker section and
  the contact block. `src/app/components/Lightbox.tsx` is the full-screen
  photo view (arrow keys and Escape work). `src/app/components/CakeCard.tsx`
  is one photo on the shelf.
- `src/styles.css` holds the palette and type: warm paper, cocoa ink, a
  raspberry accent, Fraunces for display and Inter for text.
- The gallery uses CSS columns, so photos keep their natural aspect ratio and
  the filter simply re-flows the set.

## Host it on GitHub Pages

This is the main way to host the site. The page is a single static HTML file
with anchor navigation (no routes), so a refresh on any URL always works, and
the Pages build uses relative paths so a project site served from
`https://<user>.github.io/<repo>/` finds its images, fonts and scripts.

The included workflow (`.github/workflows/pages.yml`) builds and publishes on
every push to `main`:

1. Push this repository to GitHub with `main` as the default branch.
2. In the repository, open **Settings → Pages**, and under **Build and
deployment** set **Source** to **GitHub Actions**.
3. Push a commit (or run the workflow manually from the **Actions** tab).
   The first run publishes `dist-pages/` and prints the site URL.

The build script behind it is `bun run build:pages` (plain Vite, output in
`dist-pages/`). To check the static build locally:

```sh
bun run build:pages
python3 -m http.server 8099 --directory dist-pages
# open http://localhost:8099
```

If your default branch is not `main`, change the branch name in the workflow.

## Deploy with Freebuff Sites (optional)

`deploy.json` still points at the Cloudflare build output. After `bun run
build`, deploy with the `sites_deploy` tool from this directory.
