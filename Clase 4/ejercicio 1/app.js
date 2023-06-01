const fs = require("fs");

let data = new Date().toLocaleString();

fs.writeFile("Time.txt", data, (err) => {
  if (err) console.log("ERROR: ", err);
  else console.log("Se escribio el archivo");
});

fs.readFile("./Time.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("DATA: ", data);
});
