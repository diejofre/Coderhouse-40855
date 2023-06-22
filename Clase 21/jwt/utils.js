import jwt from "jsonwebtoken";

const PRIVATE_key = "secret";

export const generateToken = (user) => {
  const token = jwt.sign(user, PRIVATE_key, {
    expiresIn: "24h",
  });
  return token;
};

export const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send("Not authenticated");
  const token = authHeader.split(" ")[1];
  jwt.verify(token, PRIVATE_key, (err, credentials) => {
    if (err) return res.status(403).send("Not authorized");
    req.user = credentials.user;
    next();
  });
};
