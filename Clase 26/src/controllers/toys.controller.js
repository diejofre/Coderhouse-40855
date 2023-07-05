const getToys = (req, res) => {
  res.send("toys controller");
};

const saveToy = (req, res) => {
  const { id, name, description } = req.body;
  if (!id || !name || !description)
    return res.status(400).send("Datos faltantes");
  res.sendStatus(201);
};
