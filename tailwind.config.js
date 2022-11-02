/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			'morning': '#88958D',
			'ebony': '#606D5D',
			'lilac': '#BC9CB0',
			'lavendar': '#D3CDD7',
			'cyan': '#DDF2EB',
			'gray': '#6b7280',
			'dark': '#171717',
			'light': '#f8fafc' 
		}
	},
	plugins: [],
};
