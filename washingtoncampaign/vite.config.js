
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     historyApiFallback: true,
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'vendor': ['react', 'react-dom']
//         }
//       },
    
      
//     },

//     chunkSizeWarningLimit: 1000 // Adjust chunk size limit
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  build: {

    chunkSizeWarningLimit: 1000, // Adjust chunk size limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Keep React libraries in a separate vendor chunk
        },
      },
      // Remove external for react-helmet-async
    },
  },
});
