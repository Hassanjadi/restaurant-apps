import TheRestaurantDbSource from "../../data/therestodb-source";
import { createRestaurantItemTemplate } from "../templates/templates-creator";

const Home = {
  async render() {
    return `
    <section id="hero" class="hero" aria-label="Hero">
      <div class="hero__images" tabindex="0" aria-label="Hero Image Restaurant">
        <img src="/images/heros/hero-image_2.jpg" alt="Hero Images" />
      </div>
      <div class="hero__description">
        <h1 id="hero-title" tabindex="0" aria-label="Welcome to Our Restaurant Catalog">
          Welcome to Our <br />
          Restaurant Catalog
        </h1>
        <a href="#restaurants">Explore Now</a>
      </div>
    </section>
    
    <div class="content">
      <h2 class="content__heading">Restaurant List</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const response = await TheRestaurantDbSource.restaurantList();
    const restaurants = response.restaurants;
    const restaurantContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
