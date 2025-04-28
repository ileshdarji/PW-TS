import { PracticeFormPage, FormData } from "./demoqa/pages/PracticeFormPage";
import { test, expect } from '@playwright/test';

const formData: FormData = {
    firstName: 'Jon',
    lastName: 'Doe',
    email: 'jon.doe@email.com',
    gender: 'Male',
    mobile: "1234567890",
    dateOfBirth: "28 May 1995"
}

test('Submit form', async ({ page }) => {
    const practiceFormPage = new PracticeFormPage(page);
    await practiceFormPage.goto();

    await practiceFormPage.fillForm(formData)

    // (To do) Submit the form after filling out the required fields.

    // (To do) Validate that the success message or modal appears after form submission.

})