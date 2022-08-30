import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../model/AuthState';
import { removeItemFromLocalStorage, getUserFromLocalStorage } from '../utils/localStorage';
import API_BASE_URL from './constants';

const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

instanceAxios.interceptors.request.use((config) => {
  const loggedUser = getUserFromLocalStorage<AuthState>('Auth');
  // eslint-disable-next-line no-param-reassign
  if (config.headers) config.headers.Authorization = `Bearer ${loggedUser.token}`;
  return config;
});

instanceAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response.status === 401) {
      removeItemFromLocalStorage('Auth');
      const navigate = useNavigate();
      navigate('/');
    } else {
      throw error;
    }
  }
);

export default instanceAxios;
