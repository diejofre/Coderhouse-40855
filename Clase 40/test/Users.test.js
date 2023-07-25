import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import Assert from "assert";
import dotenv from "dotenv";

dotenv.config();

const assert = Assert.strict;

mongoose.connect(process.env.MONGO_URL);

describe("Testear DAO de los usuarios", () => {
  const mockUser = {
    first_name: "Pepe",
    last_name: "Sand",
    email: "pepe@mail",
    password: "pepepass",
  };

  before(function () {
    this.User = new Users();
  });

  beforeEach(async function () {
    this.timeout(5000);
    await mongoose.connection.collections.users.deleteMany({});
  });

  it("El DAO debe poder obtener los usuarios en un arreglo", async function () {
    const result = await this.User.get();
    assert.strictEqual(Array.isArray(result), true);
  });

  it("El DAO debe poder agregar un elemento", async function () {
    const result = await this.User.save(mockUser);
    assert.ok(result._id);
  });

  it("Cuando agregamos nuevo usuario este debe tener un arreglo de mascotas", async function () {
    const result = await this.User.save(mockUser);
    assert.deepStrictEqual(result.pets, []);
  });

  it("El DAO puede obtener un usuario por email", async function () {
    const user = await this.User.save(mockUser);
    await this.User.getBy({ email: user.email });
    assert.strictEqual(typeof user, "object");
  });
});
