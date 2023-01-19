import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test("local", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // await page.waitForSelector("//h1[normalize-space()='Vite + React']");
  await expect(page).toHaveTitle("Vite + React");
  await page.getByRole("button", { name: /count is/ }).click();
});
