const { test, expect } = require('@playwright/test');

test('Zaloguj się na Moodle i otwórz kurs', async ({ page }) => {
  await page.goto('https://school.moodledemo.net/login/index.php');

  await page.locator('#username').fill('teacher');
  await page.locator('#password').fill('moodle25');

  await page.locator('#loginbtn').click();

  await expect(page).toHaveURL('https://school.moodledemo.net/my/courses.php');

  await page.getByRole('link', { name: 'Mindful course creation', exact: true }).click();

  await expect(page).toHaveURL('https://school.moodledemo.net/course/view.php?id=69');

  await page.getByRole('checkbox', { name: 'Edit mode' }).check();
  await page.waitForLoadState('domcontentloaded');
});
