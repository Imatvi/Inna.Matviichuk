// @ts-check
import { test, expect } from '@playwright/test';

test('check two values', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/dropdown');
  await page.getByRole('http://the-internet.herokuapp.com/dropdown', ({ 'Dropdown List' })).click();
  await page.selectOption({'Please select an option'});
  await page.selectOption({'Option 1'});
});



test('click dropdown', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('first item is not active', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('second item is active', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});