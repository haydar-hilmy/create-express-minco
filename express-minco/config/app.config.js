import dotenv from 'dotenv';
dotenv.config();

const APP_CONFIG = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  project_name: process.env.PROJECT_NAME || "Express MVC",
  timezone: 'Asia/Jakarta'
};

export default APP_CONFIG;