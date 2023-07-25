import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import chai from "chai";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const expect = chai.expect;

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
    expect(result).to.be.deep.equal([]);
  });

  it("El DAO debe poder agregar un elemento", async function () {
    const result = await this.User.save(mockUser);
    expect(result).to.have.property("_id");
  });

  it("Cuando agregamos nuevo usuario este debe tener un arreglo de mascotas", async function () {
    const result = await this.User.save(mockUser);
    expect(result.pets).to.be.an("array");
  });

  it("El DAO puede obtener un usuario por email", async function () {
    const user = await this.User.save(mockUser);
    const result = await this.User.getBy({ email: user.email });
    expect(result).to.have.property("_id");
  });

  it("El DAO puede actualizar un usuario", async function () {
    const user = await this.User.save(mockUser);
    await this.User.update(user._id, { first_name: "José" });
    const result = await this.User.getBy({ email: user.email });
    expect(result.first_name).to.equal("José");
  });

  it("El DAO puede eliminar un usuario", async function () {
    const user = await this.User.save(mockUser);
    await this.User.delete(user._id);
    const result = await this.User.getBy({ email: user.email });
    expect(result).to.be.null;
  });
});
