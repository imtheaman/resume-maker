import express from "express";
import bodyParser from "body-parser";
import { insertDoc, readDoc } from "../database/utils";

const app = express();
app.use(bodyParser.json());
const port = process.env.NODE_ENV === "production" ? process.env.port : 4000;
app.get("/:resumeId", async (req, res) => {
  const response = await readDoc(req.params.resumeId);
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
