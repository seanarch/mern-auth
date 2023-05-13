import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import template from "../template.js";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.use("/", userRoute);
app.use("/", authRoute);

export default app;
