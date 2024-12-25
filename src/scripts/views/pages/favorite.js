import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Favorite Restaurant</h2>
      <div id="restaurant" class="restaurant">
 
      </div>
    </div>
  `;
  },
 
  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Favorite;