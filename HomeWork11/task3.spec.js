// @ts-check

import { test, expect } from '@playwright/test';

test('open site', async ({page})=>{
  await page.goto('http://formy-project.herokuapp.com/form');
});
