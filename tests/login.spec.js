const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

const message = await page.locator('#flash').textContent();
if (!message.includes('You logged into a secure area!')) {
  throw new Error('Login failed');
}});
