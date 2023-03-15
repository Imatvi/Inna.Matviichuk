// @ts-check
import { test, expect } from '@playwright/test';

test('open site', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/dropdown');
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});