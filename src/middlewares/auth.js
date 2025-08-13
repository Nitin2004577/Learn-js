const auth = (req, res, next) => {
 const cookie = req.headers.cookie;
 
const result = cookie.split("=");
console.log(result[1]);

next();
};
export default auth;