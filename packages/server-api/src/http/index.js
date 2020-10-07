import axios from 'axios';
import { config } from './config';

class HTTP {
  constructor(config) {
    this.axios = null;
    this.setAxiosConfig(config);
  }

  setAxiosConfig(config) {
    this.axios = axios.create({
      ...config
    });
  }

  async get(url) {
    const response = await this.axios.get(url);
    return response;
  }

  async post(url = null) {
    const response = await this.axios.post(url);
    return response;
  }
}

const Provider = new HTTP(config);

export { Provider };
