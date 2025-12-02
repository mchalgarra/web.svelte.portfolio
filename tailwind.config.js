/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			display: ['Red Hat Display', 'sans-serif']
		},
		screens: {
			sm: '660px',
			md: '790px'
		},
		extend: {
			backgroundColor: {
				primary: '#18141F',
				card: '#2F2B36',
				drawer: '#402A9B'
			},
			textColor: {
				100: '#E6E5FF',
				200: '#B2B1C7',
				300: '#858395',
				light: '#C4C2F0',
				inverted: '#18141F'
			},
			colors: {
				primary: '#B5B3FF',
				accent: '#A6D590',
				highlight: '#669EFF',
				shade: '#402A9B'
			},
			borderColor: {
				inverted: '#18141F'
			}
		}
	},
	plugins: []
};
