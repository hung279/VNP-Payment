const express = require("express");
const path = require("path");
const logger = require("morgan");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const productRouter = require("./routes/product.router");
const orderRouter = require("./routes/order.router");

app.use("/cart", productRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Connecting to http://localhost:${port}/`);
});
