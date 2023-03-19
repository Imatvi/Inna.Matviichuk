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

