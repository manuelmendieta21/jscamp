/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3b4550',
                    dark: '#0a3d66',
                    hover: '#0d5ba8',
                    light: '#0099ff',
                },
                background: '#06182a',
                text: {
                    primary: '#ffffff',
                    secondary: '#cbd5e1',
                    muted: '#94a3b8',
                },
                border: 'rgba(255, 255, 255, 0.1)',
                card: {
                    bg: '#1e293b',
                },
                input: {
                    bg: '#1e293b',
                }
            }
        },
    },
    plugins: [],
}
