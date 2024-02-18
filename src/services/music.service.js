import axios from 'axios';
const id = import.meta.env.VITE_SEED_ARTIST

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refresh_token();
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refresh_token = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', import.meta.env.VITE_CLIENT_ID);
    params.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);

    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    console.log("refresh ", response.data?.access_token);
    localStorage.setItem('accessToken', response.data?.access_token);
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

const get_recommendation = async () => {
  const response = await api.get(`recommendations?seed_artists=${id}&limit=7`);
  return response.data;
}

const search_api = async (query) => {
  const response = await api.get(`search?q=${query}&type=track%2Cartist%2Calbum&limit=7`);
  return response.data;
}

const get_categories = async () => {
  const response = await api.get(`browse/categories?locale=th_TH&offset=0`);
  return response.data;
}

export {get_recommendation, refresh_token, search_api, get_categories}