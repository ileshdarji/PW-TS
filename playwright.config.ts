import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        baseURL: 'https://demoqa.com/',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        launchOptions: {
            slowMo: 3000,
        },
    },
    testDir: './tests',
    retries: 0,
    timeout: 30*1000,
})