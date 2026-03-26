const { MongoClient } = require("mongodb");

(async () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");

  try {
    await client.connect();

    const collection = client
      .db("ecommerce")
      .collection("sales");

    // ✅ quantity pe index create
    await collection.createIndex({ quantity: 1 });

    console.log("Index Created ✅");

    // ✅ sab indexes show karo
    const indexes = await collection.indexes();
    console.log(indexes);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();