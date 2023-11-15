/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			blue: "#33658a",
			lightblue: "#86bbd8",
			gray: "#2f4858",
			gold: "#f6ae2d",
		},
		fontFamily: {
			sans: ["Nunito", "sans-serif"],
			serif: ["Cinzel", "serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
}
