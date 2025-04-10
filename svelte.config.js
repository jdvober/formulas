import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

const config = {
	compilerOptions: {
		runes: true,
	},
	preprocess: [vitePreprocess({ script: true }), mdsvex()],
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './src/lib/',
		},
	},
	extensions: ['.svelte', '.svx'],
}

export default config
