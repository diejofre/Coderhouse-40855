import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hola >Docker!');
});

app.get('/operacionsencilla', (req, res) => {
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }
  res.json(suma);
});

app.get('/operacioncompleja', (req, res) => {
  let suma = 0;
  for (let i = 0; i < 5e7; i++) {
    suma += i;
  }
  res.json(suma);
});

app.listen(3000, () => {
  console.log('Server running at port: 3000');
});