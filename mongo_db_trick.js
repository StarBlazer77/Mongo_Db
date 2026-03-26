const { MongoClient } = require("mongodb");

(async () => {
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();

  await client.db("ecommerce")
    .collection("products")
    .insertOne({ name: "Mouse", price: 500 });

  console.log("Inserted ✅");
  client.close();
})();




// 🧠 Kaise yaad rakho (simple trick)

// 👉 Bas ye pattern yaad rakho:

// client → db → collection → insert


// Ultra short samajh
// MongoClient → connect
// db("ecommerce") → database
// collection("products") → table
// insertOne() → data daalna