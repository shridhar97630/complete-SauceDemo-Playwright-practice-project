import { test, expect } from '../fixtures/test-fixtures.js';

import users from '../test-data/users.json';

test('Complete Checkout', async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage
}) => {

  await loginPage.goto();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await productsPage.addBackpack();

  await productsPage.openCart();

  await cartPage.checkout();

  await checkoutPage.enterCustomerDetails(
    users.customer.firstName,
    users.customer.lastName,
    users.customer.postalCode
  );

  await checkoutPage.finishOrder();

  await expect(checkoutPage.successMessage)
    .toHaveText('Thank you for your order!');

});