import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://hotline.ua',
  },
  projects: [
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
      retries: 2,
    },
  ],
  outputDir: 'test-results/',
  reporter: [
    ['list'],
    ['html', { outputPath: 'test-results/report.html', open: 'always' }],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['junit', { outputFile: 'test-results/test-results.xml' }],
  ],
  workers: 4,
  fullyParallel: true,
};

