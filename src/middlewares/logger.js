const logger = (req, res, next) => {
const method = req.method;
const route = req.originalURL;


console.log(`Method: ${method} & {url}`);

next();
};

export default logger;