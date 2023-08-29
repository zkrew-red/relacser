import { defineConfig } from 'astro/config'
import compress from "astro-compress"
import compressor from 'astro-compressor'

// https://astro.build/config
export default defineConfig({
  integrations: [
		compress(),
		compressor(),
	],
  base: '/rescaler',
  site: 'https://zkrew.red/rescaler/'
});
