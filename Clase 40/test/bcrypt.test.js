import chai from "chai";
import { createHash, passwordValidation } from "../src/utils/index.js";

const expect = chai.expect;

describe("Testear el funcionamiento del uso que le dimos a la librería bcrypt", () => {
  const mockUser = {
    first_name: "Pepe",
    last_name: "Sand",
    email: "pepe@mail",
    password: "pepepass",
  };

  it("El servicio debe realizar un hasheo efectivo de la contraseña (debe corroborarse que el resultado sea diferente a la contraseña original", async () => {
    const result = await createHash(mockUser.password);
    expect(result).is.not.equal(mockUser.password);
  });

  it("El hasheo realizado debe poder compararse de manera efectiva con la contraseña original (la comparación debe resultar en true)", async () => {
    const passwordHashed = await createHash(mockUser.password);

    const userPasswordHashed = {
      password: passwordHashed,
    };

    const result = await passwordValidation(
      userPasswordHashed,
      mockUser.password
    );
    expect(result).is.equal(true);
  });

  it("Si la contraseña hasheada se altera, debe fallar en la comparación de la contraseña original.", async () => {
    const passwordHashed = "$ghadshgdsahjsgdajh/(?dsahkjsda";

    const userPasswordHashed = {
      password: passwordHashed,
    };

    const result = await passwordValidation(
      userPasswordHashed,
      mockUser.password
    );
    expect(result).is.equal(false);
  });
});
