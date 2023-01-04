import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://damilola94:damilola94@cluster0.ncmszgu.mongodb.net/meetup?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetup");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
