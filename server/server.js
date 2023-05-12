import config from "../config/config.js";
import app from "./express.js";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);

console.log(`Connected to mongodb ${process.env.MONGODB_URI}`);

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
