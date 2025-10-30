import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { qrcode } from 'vite-plugin-qrcode'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), qrcode(), svgLoader()],
	server: {
		port: 3000,
	},
	build: {
		outDir: 'out',
	},
})
