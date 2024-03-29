/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import tailwindAnimate from 'tailwindcss-animate';

import colors from './src/constants/colors';
import { fonts } from './src/constants/typos';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: 'class',
	plugins: [
		plugin(({ addComponents }) => {
			addComponents(fonts);
		}),
		tailwindAnimate,
	],
	theme: {
		screens: {
			xxs: '320px',
			xs: '375px',
			...defaultTheme.screens,
		},
		colors: colors,
		extends: {
			fontFamily: { SUIT: ['SUIT', 'sans-serif'] },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
};
