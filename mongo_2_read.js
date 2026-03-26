const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function run() {
  try {
    await client.connect();

    // const db = client.db("ecommerce");
    // const collection = db.collection("products");

    // const data = await collection.find({ name: "Wireless Mouse" }).toArray();
      const data = await client.db("ecommerce")
       .collection("products")
      .find({ price: { $gt: 1000 } })
       .toArray();


    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();