import { Page } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}


    // Verify if the current page URL includes a given substring.
    async checkURLContains(part: string): Promise<boolean> {
        return this.page.url().includes(part);
    }

    // add other common methods here that can be shared across all page objects
}