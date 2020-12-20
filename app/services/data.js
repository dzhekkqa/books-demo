import Service from '@ember/service';
import ENV from 'books-demo/config/environment';

export default Service.extend({
  getSpeakers() {
    return fetch(`${ENV.backendURL}/speakers`).then((response) => response.json());
  },

  getSpeaker(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  }
});
