import { test, expect } from '../fixtures/test-fixtures.js';

import users from '../test-data/users.json';

test('Valid Login', async ({ loginPage, page }) => {

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});


test('Invalid Login', async ({ loginPage }) => {

  await loginPage.goto();

  await loginPage.login(
    users.invalidUser.username,
    users.invalidUser.password
  );

  await expect(loginPage.errorMessage)
    .toBeVisible();
});


test('Locked User Login', async ({ loginPage }) => {

  await loginPage.goto();

  await loginPage.login(
    users.lockedUser.username,
    users.lockedUser.password
  );

  await expect(loginPage.errorMessage)
    .toBeVisible();
});