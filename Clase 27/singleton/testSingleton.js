import MongoSingleton from "./MongoSingleton.js";

const mongonInstance = MongoSingleton.getInstance();

const mongonInstance2 = MongoSingleton.getInstance();
