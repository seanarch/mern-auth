import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import template from "../template.js";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.route.js";
import devBundle from "./devBundle.js"; // only use in dev env

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
devBundle.compile(app); // only use in dev env

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.use("/", userRoute);
app.use("/", authRoute);
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
