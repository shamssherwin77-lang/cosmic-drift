import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  use: {
    baseURL: process.env.GYRO_PREVIEW ? 'http://127.0.0.1:5174/cosmic-drift/previews/gyro-descent/' : process.env.PLAYWRIGHT_PREVIEW ? 'http://127.0.0.1:5174/cosmic-drift/' : 'http://127.0.0.1:5174',
    launchOptions: {
      ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
      args: ['--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
    },
  },
  webServer: { command: process.env.GYRO_PREVIEW ? 'npm run preview -- --config vite.gyro-preview.config.ts --port 5174 --strictPort' : process.env.PLAYWRIGHT_PREVIEW ? 'npm run preview -- --base=/cosmic-drift/ --port 5174 --strictPort' : 'npm run dev -- --port 5174 --strictPort', url: process.env.GYRO_PREVIEW ? 'http://127.0.0.1:5174/cosmic-drift/previews/gyro-descent/' : 'http://127.0.0.1:5174', reuseExistingServer: false },
});
