import { MongoClient } from "mongodb";
import dotenv from "dotenv";
const process = dotenv.config();
const uri = process?.parsed?.MONGODB_URI!;
const client = new MongoClient(uri);

let resumes: any;
const connection = async () => {
  await client.connect();
  resumes = client.db("resumes").collection("data");
};

export const insertDoc = async (doc: any) => {
  if (!resumes) await connection();
  const insertedId = await resumes
    .insertOne(doc)
    .then((res: any) => res.insertedId);
  return insertedId;
};

export const readDoc = async (docId: string) => {
  if (!resumes) await connection();
  const doc = await resumes.findOne({ _id: docId }).then((res: any) => res);
  return doc;
};
