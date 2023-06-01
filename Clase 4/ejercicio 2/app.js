const fs = require("fs");

const ruta = "./package.json";

fs.promises
  .readFile(ruta, "utf-8")
  .then((data) => {
    console.log("El archivo se leyo correctamente");

    const info = {
      contenidoStr: JSON.stringify(data),
      contenidoObj: JSON.parse(data),
      size: fs.statSync(ruta).size,
    };

    console.log(info);

    fs.promises
      .writeFile("./info.json", JSON.stringify(info, null, 2))
      .then(() => console.log("El archivo se escribio correctamente"))
      .catch((err) => console.log("Error: ", err));
  })
  .catch((err) => console.log("Error: ", err));
