import jwt from "jsonwebtoken";

const payload : jwt.JwtPayload = {
  iss : "https://msvarunkumar504@gmail.com",
  sub : "Varunkumar8055",
};

const secretkey = "HelloWorld";

const token = jwt.sign(payload, secretkey);