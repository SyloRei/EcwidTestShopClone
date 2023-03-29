import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
	plugins: [vue(), svgLoader()],
	server: {
		port: 5000
	},
	resolve: {
		alias: {
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@interfaces': path.resolve(__dirname, 'src/interfaces'),
			'@core': path.resolve(__dirname, 'src/core'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@scss': path.resolve(__dirname, 'src/assets/scss'),
			'@store': path.resolve(__dirname, 'src/store')
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					home: ['src/pages/HomePage.vue'],
					'other-page': [
						'src/pages/DetailsPage.vue',
						'src/pages/CategoryPage.vue',
						'src/pages/CartPage.vue'
					]
				}
			}
		}
	}
})
