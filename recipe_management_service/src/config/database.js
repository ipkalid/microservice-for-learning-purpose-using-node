const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "DATABASE_URL_URL";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

var isConnected = false

async function getDatabase() {
  if (!isConnected) {
    // Connect to the client if not already connected
    await client.connect();
  }
  return client.db("recipe_management_system");
}



async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db("recipe_management_system").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    isConnected = true


  } finally {
    // await client.close();
  }
}


connectToMongoDB()


module.exports = {
  client,
  connectToMongoDB,
  getDatabase
};
