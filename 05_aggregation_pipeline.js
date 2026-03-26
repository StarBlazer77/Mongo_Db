const { MongoClient } = require("mongodb");

(async () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");

  try {
    await client.connect();

    const collection = client.db("ecommerce").collection("sales");

    // const data = await collection.aggregate([
    //   { $match: { category: "Fruit" } },   // filter
    //   { $project: { item: 1, quantity: 1, _id: 0 } } // sirf ye fields
    // ]).toArray();

    const data = await collection.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: {
        $sum: { $multiply: ["$price", "$quantity"] }
      }
    }
  }
]).toArray();

console.log(data);






    console.log(data);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
})();