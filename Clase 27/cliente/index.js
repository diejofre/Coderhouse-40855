function peticion() {
  fetch("http://localhost:8080/test")
    .then((result) => result.json())
    .then((data) => console.log(data));
}
