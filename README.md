# DemoQA Playwright Automation

Automated UI Testing for the DemoQA Practice Form using Playwright + TypeScript.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ileshdarji/PW-TS.git
cd PW-TS
```

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

---

## 📁 Project Structure

```
PW-TS/
├── tests/
│   ├── demoqa/
│   │   ├── pages/
│   │   │   ├── BasePage.ts
│   │   │   └── PracticeFormPage.ts
│   │   ├── utils/
│   │   └── form.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
```

---

## 📝 Notes

- The project follows the **Page Object Model (POM)** design pattern for modularity and maintainability.
- Common reusable methods are organized inside `BasePage.ts`.
- Utilities and random data generators can be added under `utils/`.
- Slow motion (`slowMo: 3000`) is enabled in Playwright config for visible automation during execution.
- Node modules, `test-results`, and generated reports are excluded from Git using `.gitignore`.
