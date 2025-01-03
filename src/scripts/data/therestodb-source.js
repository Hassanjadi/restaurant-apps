import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
    return response.json();
  }
}

export default TheRestaurantDbSource;
