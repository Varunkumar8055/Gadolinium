import "dotenv/config";
import jwt from "jsonwebtoken";
console.log("hhu");
const jwtSecretKey = process.env.VERY_SECRET_KEY || process.exit(1);
const payload: jwt.JwtPayload = {
  iss: "msvarunkumar504@gmail.com",
  sub: "Varunkumar8055",
};
console.log("secret key: ", jwtSecretKey);
const token = jwt.sign(payload, jwtSecretKey, {
  algorithm: "HS256",
});
console.log(token);
try {
  const p = jwt.verify(token, jwtSecretKey);
  console.log("decoded token: ", p);
} catch (e) {
  console.log("error", e);
}
