// @ts-check


//Test Case: Наведення мишою на елемент
//Website Tested: http://the-internet.herokuapp.com/hovers
//Pre-Condition: доступ до Chrome браузера
//Description. 
//•	Знайти елемент, який містить картинку аватарку юзера.
//•	Зафіксувати наведення мишою на дану картинку.
//•	Перевірити, появу тексту “name: user1” під картинкою.

import { test, expect } from '@playwright/test';

test('open site', async ({page})=>{
  await page.goto('http://the-internet.herokuapp.com/hovers');
});

/* <select id="dropdown"
    <option value disabled="disabled">Please select an option<option/>
    <option value="1" selected="selected">Option 1<option/>
    <option value="2">Option 2<option/>
</select> */

test('select first value', async ({page})=>{
    //await page.goto('http://the-internet.herokuapp.com/dropdown');
    await page.locator('select.dropdown').selectOption('disabled');
    //await page.locator('select.dropdown').toBeDisabled('disabled');
  });

  test('select seconf value', async ({page})=>{
    //await page.goto('http://the-internet.herokuapp.com/dropdown');
    await page.locator('select.dropdown').selectOption('1');
    //await page.locator('select.dropdown').toBeEnabled('1');
  });