import { sign } from "jsonwebtoken";
import path from "path";
const fs = require("fs");

interface tokenPayload {
  tenantId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

const privateKey = fs.readFileSync(
  path.join(__dirname, "../../private.pem"),
  "utf8"
);

class TokenService {
  generateToken(payload: tokenPayload) {
    const token = sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "1h",
    });
    return token;
  }
}

export default TokenService;
