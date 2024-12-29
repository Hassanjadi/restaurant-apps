import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Favorite Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  `;
  },
 
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    
    restaurants.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};
 
export default Favorite;