import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => { 
 const cookie = req.headers.cookie;

 if (!cookie) return res.status(401).send("Unauthorized");
 
const authToken = cookie.split("=")[1];

try {
    await verifyJWT(authToken);

    next();
} catch (error)  {
    res.status(400).send("Invalid token");
}

};
export default auth;