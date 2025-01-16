import TheRestaurantDbSource from '../../data/therestodb-source';
import { createRestaurantItemTemplate } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
    <section id="hero" class="hero">
      <div class="hero__images">
      <picture>
        <source media="(max-width: 600px)" srcset="./hero-image_2-small.jpg">
        <img src='./hero-image_2-large.jpg' alt="dirt rally poster">
      </picture>
      </div>
      <div class="hero__description">
        <h1 id="hero-title">
          Welcome to Our <br />
          Restaurant Catalog
        </h1>
        <a href="#restaurants">Explore Now</a>
      </div>
    </section>

    <div class="content">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const response = await TheRestaurantDbSource.restaurantList();
    const restaurants = response.restaurants;
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
