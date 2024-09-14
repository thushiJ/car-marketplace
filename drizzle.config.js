/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:E5fTZq4oFNRP@ep-cold-bird-a5smzjtm-pooler.us-east-2.aws.neon.tech/car_marketplace%20?sslmode=require'
    }
  };