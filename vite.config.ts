import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  // `bun run build:pages` produces a plain static site for GitHub Pages:
  // relative asset paths, no Worker, output in dist-pages/.
  const pages = mode === 'pages'

  return {
    base: pages ? './' : '/',
    plugins: [react(), tailwindcss(), ...(pages ? [] : [cloudflare()])],
    build: pages ? { outDir: 'dist-pages' } : undefined,
    server: {
      port: 5173,
      strictPort: false,
      // The Pages build writes into dist-pages/; don't reload the dev page for it.
      watch: { ignored: ['**/dist-pages/**', '**/dist/**'] },
    },
  }
})
