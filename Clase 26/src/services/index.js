import UsersService from "./users.service.js";
import UserManager from "../dao/userManager.js";

export const userService = new UsersService(new UserManagerMongo());
