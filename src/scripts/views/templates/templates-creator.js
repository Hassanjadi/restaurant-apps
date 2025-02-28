import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail__header">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="detail__description">
      <h2 class="restaurant__title">${restaurant.name}</h2>
      <p>${restaurant.description}</p>
      <div class="detail__address">
        <div>
          <h4>Address</h4>
          <p>${restaurant.address}</p>
        </div>
        <div>
          <h4>City</h4>
          <p>${restaurant.city}</p>
        </div>
      </div>
    </div>
  </div> 
  <div class="restaurant__menu">
    <div class="restaurant__menu__food">
      <h4>Food Menu</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="restaurant__menu__drink">
      <h4>Drink Menu</h4>
      <ul>
        ${restaurant.menus.drinks
    .map((drink) => `<li>${drink.name}</li>`)
    .join('')}
      </ul>
    </div>
  </div>
  <div class="restaurant__overview">
    <h3>Customer Reviews</h3>
    <form action="/action_page.php">
      <label for="fname">Nama:</label>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Review:</label>
      <textarea id="w3review" name="w3review" rows="4"></textarea>
      <input type="submit" value="Submit">
    </form>
    ${restaurant.customerReviews
    .map(
      (review) => `
      <div class="customer-review">
        <p><strong>${review.name}</strong> (${review.date}):</p>
        <p>${review.review}</p>
      </div>
    `
    )
    .join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate };
