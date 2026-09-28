export class ProductsPage {

  constructor(page) {
    this.page = page;

    this.productsTitle = page.locator('.title');

    this.backpack =
      page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

    this.bikeLight =
      page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

    this.cartLink = page.locator('.shopping_cart_link');

    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addBackpack() {
    await this.backpack.click();
  }

  async addBikeLight() {
    await this.bikeLight.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}