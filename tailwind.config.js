/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         gridTemplateColumns: {
            category: 'min-content 1fr min-content',
         },
         backgroundImage:{
            'noise': 'url(/noise.svg)',
            'leaves': 'url(/leaves.webp)',
         },
         border: {
            'default': '1px solid #e4e4e7'
         },
         fontFamily: {
            'brand': 'Gwen Text-Trial , sans-serif'
         },
         animation: {
            'fadeIn': '300ms fadeIn forwards',
            'scaleIn': '300ms scaleIn forwards',
            'slideDown': '300ms slideDown forwards',
            'slideUp': '300ms slideUp forwards',
            'navShow': '300ms slideDown forwards, 300ms fadeIn forwards',
            'fadeDown': '300ms slideDownHalf forwards, 300ms fadeIn forwards',
            'fadeUp': '300ms slideUp forwards, 300ms fadeIn forwards',
         },
         keyframes: {
            'fadeIn': {
               from: { opacity: 0 },
               to: { opacity: 1 }
            },
            'scaleIn': {
               from: { scale: 0 },
               to: { scale: 1 }
            },
            'slideUp': {
               from: { transform: 'translateY(15px)' },
               to: { transform: 'translateY(0px)' }
            },
            'slideDown': {
               from: { transform: 'translateY(-15px)' },
               to: { transform: 'translateY(0px)' }
            },
            'slideDownHalf': {
               from: { transform: 'translateY(-7.5px)' },
               to: { transform: 'translateY(0px)' }
            }
         }
      },
   },
   plugins: [],
}
