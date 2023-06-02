
const contador = {};

for (let i = 0; i < 10000; i++) {
  const numeroRandom = Math.floor(Math.random() * 20) + 1;

  if (contador[numeroRandom]) {
    contador[numeroRandom]++;
  } else {
    contador[numeroRandom] = 1;
  }
}

console.log(contador);
