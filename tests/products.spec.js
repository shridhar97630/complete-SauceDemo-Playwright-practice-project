import { test, expect } from '../fixtures/test-fixtures.js';

import users from '../test-data/users.json';

test.beforeEach(async ({ loginPage }) => {

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

});


test('Verify Products Page', async ({ productsPage }) => {

  await expect(productsPage.productsTitle)
    .toHaveText('Products');

});


test('Add Backpack To Cart', async ({ productsPage }) => {

  await productsPage.addBackpack();

  await expect(productsPage.cartBadge)
    .toHaveText('1');

});


test('Add Two Products To Cart', async ({ productsPage }) => {

  await productsPage.addBackpack();

  await productsPage.addBikeLight();

  await expect(productsPage.cartBadge)
    .toHaveText('2');

});