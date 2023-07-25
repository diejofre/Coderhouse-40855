import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Testing AdoptMe", () => {
  describe("Test de mascotas", () => {
    const mockPet = {
      name: "Mily",
      specie: "perro",
      birthDate: "10-05-2011",
    };
    it("El endpoint POST /api/pets debe crear satisfactoriamente una mascota", async () => {
      const { _body } = await requester.post("/api/pets").send(mockPet);
      expect(_body.payload).to.have.property("_id");
    });

    it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false", async () => {
      const { _body } = await requester.post("/api/pets").send(mockPet);
      expect(_body.payload).to.have.property("adopted").is.false;
    });

    it("Si se desea crear una mascota sin el campo  nombre, el módulo debe responder con un status 400.", async () => {
      const newMockPet = {
        specie: "gato",
        birthDate: "10-09-2011",
      };
      const { statusCode } = await requester.post("/api/pets").send(newMockPet);
      expect(statusCode).to.equal(400);
    });

    it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async () => {
      const { _body } = await requester.get("/api/pets");
      expect(_body).to.have.property("status");
      expect(_body).to.have.property("payload");
      expect(_body.payload).to.be.an("array");
    });

    it("El método PUT debe poder actualizar correctamente a una mascota determinada (esto se puede testear comparando el valor previo con el nuevo valor de la base de datos).", async () => {
      const otherMockPet = {
        name: "Sasha",
        specie: "gato",
        birthDate: "10-06-2011",
      };
      const { _body } = await requester.post("/api/pets").send(mockPet);
      const pid = _body.payload._id;
      const res = await requester.put(`/api/pets/${pid}`).send(otherMockPet);
      expect(res._body.message).to.equal("pet updated");
    });
  });

  describe("Test de usuarios", () => {
    const cookie = {};
    it("Debe registrar correctamente a un usuario", async () => {
      const user = {
        first_name: "Pepe",
        last_name: "Sand",
        email: "pepe@mail",
        password: "pepepass",
      };
      const { _body } = await requester
        .post("/api/sessions/register")
        .send(user);
      expect(_body.payload).to.be.ok;
    });

    it("Debe loguear correctamente al usuario y devolver una cookie", async () => {
      const user = {
        email: "pepe@mail",
        password: "pepepass",
      };
      const { headers } = await requester
        .post("/api/sessions/login")
        .send(user);
      const cookieResult = headers["set-cookie"][0];
      expect(cookieResult).to.be.ok;

      cookie.name = cookieResult.split("=")[0];
      cookie.value = cookieResult.split("=")[1];

      expect(cookie.name).to.be.ok.and.equal("coderCookie");
      expect(cookie.value).to.be.ok;
    });
  });
});
