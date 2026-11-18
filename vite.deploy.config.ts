import {defineConfig} from 'vite';
export default defineConfig({base:'/cosmic-drift/',build:{rollupOptions:{output:{manualChunks:{three:['three'],react:['react','react-dom/client']}}}}});
