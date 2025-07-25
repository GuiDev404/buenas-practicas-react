import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': `${path.resolve(__dirname, "./src/components/")}`,
      '@assets': `${path.resolve(__dirname, "./assets/")}`,
      '@test': path.resolve(__dirname, "./src/test"),
      '@mocks': `${path.resolve(__dirname, "./src/mocks")}`,
      '@utils': `${path.resolve(__dirname, "./src/utils")}`,
    },
  },
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: 'src/test/setup.js'
  }  
})
