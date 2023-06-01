const fs = require("fs");

class ManagerUsuarios {
  constructor() {
    this.usuarios = [];
  }

  crearUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  guardarUsuarios() {
    fs.promises.writeFile("./Usuarios.json", JSON.stringify(this.usuarios));
  }

  consultarUsuarios() {
    fs.promises.readFile("./Usuarios.json", "utf-8");
  }
}

const usuario1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
};

const usuario2 = {
  nombre: "Maria",
  apellido: "Gomez",
  edad: 30,
};

const manager = new ManagerUsuarios();
manager.crearUsuario(usuario1);
manager.crearUsuario(usuario2);
manager.guardarUsuarios();
manager.consultarUsuarios();
console.log(manager.usuarios);
