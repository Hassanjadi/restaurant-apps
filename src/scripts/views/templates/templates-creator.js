import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => ` 
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Food Menu</h4>
    <ul>
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
    </ul>
    <h4>Drink Menu</h4>
    <ul>
      ${restaurant.menus.drinks
        .map((drink) => `<li>${drink.name}</li>`)
        .join("")}
    </ul>
  </div>
  <div class="restaurant__overview">
    <h3>Categories</h3>
    <ul>
      ${restaurant.categories
        .map((category) => `<li>${category.name}</li>`)
        .join("")}
    </ul>
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews
      .map(
        (review) => `
      <div class="customer-review">
        <p><strong>${review.name}</strong> (${review.date}):</p>
        <p>${review.review}</p>
      </div>
    `
      )
      .join("")}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
          src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
          restaurant.rating
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
