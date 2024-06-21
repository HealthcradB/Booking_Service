import axios from "axios";

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

class AuthMiddleware {
  async handle(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const response = await axios.post(AUTH_SERVICE_URL, { token });

      if (response.data && response.data.valid) {
        req.user = response.data.user;
        next();
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}

export default new AuthMiddleware();
