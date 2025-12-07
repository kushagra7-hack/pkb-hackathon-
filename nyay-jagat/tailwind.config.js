/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6B46C1", // Justice Purple
                secondary: "#2563EB", // Trust Blue
                accent: "#F59E0B", // Action Orange
                rights: "#DC2626",
                consumer: "#059669",
                online: "#0891B2",
                "bg-dark": "#0f172a",
                "bg-gradient-start": "#1e1b4b",
                "bg-gradient-end": "#1e3a8a",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
