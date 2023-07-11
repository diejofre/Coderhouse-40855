/*import { createTransport } from "nodemailer";

const TEST_MAIL = "mack83@ethereal.email";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "jyGHPz6R4csZk7VwaQ",
  },
});

const emailContent = {
  from: "Mi primer app con Nodemailer",
  to: `Querido desarrollador <${TEST_MAIL}>`,
  subject: "Prueba correo con Nodemailer",
  text: "Holaa",
  html: "<h1 style='color: blue'>Contenido de prueba desde <span style='color: red'>Node.js on Nodemailer</span><img src='cid:gatito'></h1>",
  attachments: [
    {
      filename: "gato.jpg",
      path: "./src/gato.jpg",
      cid: "gatito",
    },
    {
      path: "./src/perro.jpeg",
    },
  ],
};

try {
  const info = await transporter.sendMail(emailContent);
  console.log(info);
} catch (err) {
  console.log("ERROR", err);
}
*/

import twilio from "twilio";

const accountSid = "ACdb39b7fae6bb12596a65fa30708519d6";
const authToken = "2a12619aee6c0fa8e8b833902fba2574";

const client = twilio(accountSid, authToken);

const mensaje = "Hola este es un mensaje de prueba";

try {
  const message = await client.messages.create({
    body: mensaje,
    from: "+12345163466",
    to: "+541167930120",
  });
  console.log(message);
} catch (error) {
  console.log(error);
}
