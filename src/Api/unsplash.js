import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID LaaAX4TV7okhUkAJJq6XJD0nefZwASiAzsTqBrYGM-w'
  }


});
