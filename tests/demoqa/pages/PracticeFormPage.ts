import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export type Gender = "Male" | "Female" | "Other";

export interface FormData {
    firstName: string;
    lastName: string;
    email:string;
    gender: Gender;
    mobile: string;
    dateOfBirth: string;
}

export class PracticeFormPage extends BasePage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly mobileInput: Locator;
    readonly dateOfBirthInput: Locator;

    constructor(page: Page) {
        super(page)

        // Locators
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.mobileInput = page.locator('#userNumber')
        this.dateOfBirthInput = page.locator('#dateOfBirthInput')
    }

    async goto() {
        await this.page.goto('/automation-practice-form');
    }
    async fillFirstName(firstname: string) {
        await this.firstNameInput.fill(firstname);
    }
    async fillLastName(lastname: string) {
        await this.lastNameInput.fill(lastname);
    }
    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async fillMobile(mobile: string) {
        await this.mobileInput.fill(mobile)
    }
    async fillDateOfBirth(dateOfBirth: string) {
        await this.dateOfBirthInput.fill(dateOfBirth)
    }

    async selectGender(gender: Gender) {
        const genderIdMap: Record<Gender, string> = {
            'Male': 'gender-radio-1',
            'Female': 'gender-radio-2',
            'Other': 'gender-radio-3'
        }
        const genderId = genderIdMap[gender];
        await this.page.locator(`label[for="${genderId}"]`).click();
    }

    async fillForm(formData: FormData) {
        await this.fillFirstName(formData.firstName);
        await this.fillLastName(formData.lastName)
        await this.fillEmail(formData.email)
        await this.selectGender(formData.gender)
        await this.fillMobile(formData.mobile)
        await this.fillDateOfBirth(formData.dateOfBirth)
    }

    // TODO: Implement subject selection for multiple subjects (e.g., using a utility to pick random 3 subjects)

    // TODO: Implement form submission method (click submit button)

    // TODO: Implement success message verification after form submission

}

