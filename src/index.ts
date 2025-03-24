import jwt from "jsonwebtoken";

const payload : jwt.JwtPayload = {
  iss : "https://msvarunkumar504@gmail.com",
  sub : "Varunkumar8055",
};

const secretkey = "HelloWorld";

const token = jwt.sign(payload, secretkey, {
  algorithm: "HS256",
  expiresIn: "1h",
}
);
console.log(token);

try {
  const decodedplayload = jwt.verify(token, secretkey);
  console.log("decoded code", decodedplayload);
}
catch (error) {
  console.log("error", error);
}

