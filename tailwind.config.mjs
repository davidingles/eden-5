/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				auxi1: 'rgb(223 172 18)',
				auxi2: 'rgb(0 129 74)',
				marcado: 'rgb(rgb(0, 204, 255)',
			},
			borderWidth: {
				david: '1px',
			},
			borderColor: {
				rojo: '#F00'
			},

		},
	},
	plugins: [],
}
