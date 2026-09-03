import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const src = (p) => resolve(__dirname, 'src', p)

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: src('index.html'),
        shop: src('shop/index.html'),
        vanilla: src('shop/vanilla/index.html'),
        pomegranate: src('shop/pomegranate/index.html'),
        'coconut-pear': src('shop/coconut-pear/index.html'),
        beeswax: src('shop/beeswax/index.html'),
        'honey-grapefruit': src('shop/honey-grapefruit/index.html'),
        mango: src('shop/mango/index.html'),
        'our-story': src('about/our-story/index.html'),
        'how-it-works': src('about/how-it-works/index.html'),
        sustainability: src('about/sustainability/index.html'),
        'our-beekeepers': src('about/our-beekeepers/index.html'),
        'design-system': src('about/design-system/index.html'),
        ingredients: src('ingredients/index.html'),
        cinema: src('cinema/index.html'),
        faq: src('faq/index.html'),
        privacy: src('privacy/index.html'),
        terms: src('terms/index.html'),
        stockists: src('stockists/index.html'),
        wholesale: src('wholesale/index.html'),
        refills: src('refills/index.html'),
        '404': src('404.html'),
      },
    },
  },
  publicDir: 'public',
  server: {
    port: parseInt(process.env.PORT || '5173'),
    strictPort: false,
  },
})
