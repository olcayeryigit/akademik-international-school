/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { 
            transform: 'translate(-200%, -200%) rotate(-45deg)', 
            opacity: 0, 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' 
          },
          '50%': { 
            opacity: 1, 
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.7)' 
          },
          '100%': { 
            transform: 'translate(200%, 200%) rotate(-45deg)', 
            opacity: 0, 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)' 
          },
        },
        bounceCustom: {
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-5px)' },
          '40%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(-3px)' },
          '80%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        
      },
      animation: {
        shine: 'shine 4s ease-in-out infinite', // Animasyon süresi 4 saniyeye ayarlandı
        bounceCustom: 'bounceCustom 3s ease-in-out infinite', // Eklenen bounceCustom animasyonu
      },
      colors: {
        customBrown: '#010101', // Yeni renk eklendi
      },
    },
  },
  plugins: [],
};
