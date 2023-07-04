import dotenv from "dotenv";

const environment = "DEVELOPMENT";
dotenv.config({
  path:
    environment == "DEVELOPMENT" ? "./.env.development" : "./.env.production",
});

export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminName: process.env.ADMIN_NAME,
  adminPass: process.env.ADMIN_PASS,
};
