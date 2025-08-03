import express from "express";
// import config from "./config/config.js";
import productRoute from "./routes/productRoute.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
    status: "OK",
  });
});

app.use("/", productRoute);

app.listen(config.port, () => {
  console.log(`server running at port 5000......`);
});
