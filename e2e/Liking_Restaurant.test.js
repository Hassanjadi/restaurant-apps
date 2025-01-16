const assert = require('assert');
Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking and unliking a restaurant', async ({ I }) => {
  I.seeElement('.restaurant-item');
  
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.restaurant__title');
  const detailRestaurantName = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantName, detailRestaurantName, 'Nama restoran pada daftar dan detail harus sama.');

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.fa-heart');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__content h3 a');
  assert.strictEqual(firstRestaurantName, likedRestaurantName, 'Restoran yang disukai harus muncul di daftar favorit.');

  I.click(locate('.restaurant-item a').first());
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.seeElement('.fa-heart-o');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
