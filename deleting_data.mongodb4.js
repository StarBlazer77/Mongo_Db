const { MongoClient } = require("mongodb");

(async () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  await client.db("ecommerce")
    .collection("products")
    .deleteOne({ name: "Wireless Mouse" }); // name se delete

  console.log("Deleted ✅");
  client.close();
})();