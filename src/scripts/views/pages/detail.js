import UrlParser from "../../routes/url-parser";
import TheRestaurantDbSource from "../../data/therestodb-source";
import { createRestaurantDetailTemplate } from "../../views/templates/templates-creator";

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurant = response.restaurant;
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
