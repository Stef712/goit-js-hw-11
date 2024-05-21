export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43964947-f80846a89672f26bb32a0c22c';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
