import mongoose from "mongoose";

export default class MongoSingleton {
  static #instance;
  constructor() {
    mongoose.connect(
      "mongodb+srv://diegojofre:coder@cluster0.u24cdbg.mongodb.net/?retryWrites=true&w=majority"
    );
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Ya tenes una instancia creada");
      return this.#instance;
    }
    this.#instance = new MongoSingleton();
    console.log("instancia creada - conectado");
    return this.#instance;
  }
}
