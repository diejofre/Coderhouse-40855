const fs = require("fs");

// console.log("INICIO");

// const contenido = fs.readFileSync("./prueba.txt", "utf-8");

// console.log(contenido);

// console.log("FIN");

let data = "This is a file containing a collection of books.";

fs.writeFile("books.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});
