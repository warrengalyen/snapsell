/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                'snap-yellow': '#FDC600',
                'snap-yellow-hover': '#FDC600A3',
                'slate-blue': '#00000'/* '#67ACCC' */,
                'lt-powder-blue': '#BAE6FC',
            },
            screens: {
                '3xl': '1700px',
            },
        },
    },
};
