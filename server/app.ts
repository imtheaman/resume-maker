import express from "express";
import bodyParser from "body-parser";
import { createUser, insertDoc, readDoc } from "../database/utils";
import { SHA512 } from "crypto-js";

const app = express();
app.use(bodyParser.json());
const port = process.env.NODE_ENV === "production" ? process.env.port : 4000;

const hash = (input: string) => SHA512(input).toString();

app.post("/resume", async (req, res) => {
  const response = await readDoc(req.headers.authorization);
  res.json(response);
});
app.post("/signin", async (req, res) => {
  const response = await createUser(req.body.username, hash(req.body.password));
  res.json(response);
});
app.put("/signup", async (req, res) => {
  const response = await createUser(req.body.username, hash(req.body.password));
  res.json(response);
});
app.post("/", async (req, res) => {
  const response = await insertDoc(req.body());
  res.json(response);
});
app.get("*", (req, res) => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://free-resume-maker.vercel.app"
      : "http://localhost:3000";
  res.redirect(url);
});
app.listen(port, () => console.log("listening on " + port));
