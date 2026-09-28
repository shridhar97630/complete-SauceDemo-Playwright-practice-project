import { test, expect } from '../fixtures/test-fixtures.js';

import users from '../test-data/users.json';

test('Verify Cart', async ({
  loginPage,
  productsPage,
  cartPage
}) => {

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await productsPage.addBackpack();

  await productsPage.openCart();

  await expect(cartPage.cartItems)
    .toHaveCount(1);

});