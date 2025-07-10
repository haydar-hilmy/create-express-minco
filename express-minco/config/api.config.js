import dotenv from 'dotenv';
dotenv.config();

const API_CONFIG = {
  baseURL: process.env.API_BASE_URL,
  apiKey: process.env.API_KEY,
};

export default API_CONFIG;