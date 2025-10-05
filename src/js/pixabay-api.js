import axios from 'axios';
import { displayError } from './handlers';

const apiKey = '52590254-85187c30c56e1e2220df9945c';
axios.defaults.baseURL = `https://pixabay.com`;

export async function getImageByQuery(query, page) {
  try {
    const response = await axios.get('/api/', {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    displayError(error.message);
  }
}
