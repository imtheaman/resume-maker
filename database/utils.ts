import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

const process = dotenv.config();
const uri = process?.parsed?.MONGODB_URI!;
const client = new MongoClient(uri);

let resumes: any;
let users: any;
const connection = async () => {
  await client.connect();
  const db = client.db("resumes");
  resumes = db.collection("data");
  users = db.collection("users");
};

export const insertDoc = async (doc: any) => {
  if (!resumes) await connection();
  const insertedId = await resumes
    .insertOne(doc)
    .then((res: any) => res.insertedId);
  return insertedId;
};

export const createUser = async (username: string, password: string) => {
  if (!users) await connection();
  const _id = uuid();
  const userExist = await users.findOne({ _id });
  if (userExist) return false;
  const insertedId = await users.insertOne({ _id, username, password });
  return insertedId;
};

export const checkUser = async (username: string, password: string) => {
  if (!users) await connection();
  const user = await users.findOne({ username, password });
  return user._id;
};

export const readDoc = async (docId: string) => {
  if (!resumes) await connection();
  const doc = await resumes.findOne({ _id: docId }).then((res: any) => res);
  return doc;
};
