import UrlParser from "../../routes/url-parser";
import TheRestaurantDbSource from "../../data/therestodb-source";
import { createRestaurantDetailTemplate } from '../templates/templates-creator';
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurant = response.restaurant;
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);


    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
