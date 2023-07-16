/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
    theme: {
        extend: {
            colors: {
                'snap-yellow': '#FDC600',
                'snap-yellow-hover': '#FDC600A3',
                'slate-blue': '#67ACCC',
                'lt-powder-blue': '#BAE6FC',
            }
        }
    }
};
