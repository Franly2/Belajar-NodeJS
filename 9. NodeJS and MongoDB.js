//  ! sesuai docs di npm & mongodb website
const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "wpu";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  // console.log("Connected successfully to server");

  // the following code examples can be pasted here...
  const database = client.db(dbName);
  const collectionName = database.collection("mahasiswa");

  //! insertOne (menambah  1 data)
  // insert the document
  // const result = await collectionName.insertOne({
  //   name: "lontong",
  //   email: "lontong@gmail.com",
  // });
  // console.log(`A document was inserted with the _id: ${result.insertedId}`);
  // return "done."

  //! insertMany (menambah data lebih dari 1 data)
  // const result = await collectionName.insertMany([
  //   {
  //     nama: "lontong",
  //     email: "lontong@gmail.com",
  //   },
  //   {
  //     nama: "lontongkedua",
  //     email: "lontongkedua@gmail.com",
  //   },
  // ]);
  // console.log(`${result.insertedCount} documents were inserted`);
  // return "done.";

  // ! menampilkan data di db mahasiswa
  // const result = await collectionName.find().toArray((err, result) => {});
  // console.log(result);

  // ! menampilkan data sesuai kriteria
  // const result = await collectionName
  //   .find({ _id: new ObjectId("6475ebb8c18720080f3b4b60") })
  //   .toArray((err, result) => {});
  // console.log(result);

  // ! mengubah data berdasarkan kriteria
  //   const result = await collectionName.updateOne(
  //     { nama: "lontong" },
  //     { $set: { nama: "lontongNamaBaru" } }
  //   );
  //   console.log(result);
  // }
  // ! mengubah lebih dari 1 data berdasarkan kriteria
  // const result = await collectionName.updateMany(
  //   { nama: "lontongNamaBaru" },
  //   { $set: { nama: "lontong" } }
  // );
  // console.log(result);

  // ! menghapus 1 data berdasarkan kriteria
  // try {
  //   const result = await collectionName.deleteOne({ nama: "franly" });
  //   if (result.deletedCount === 1) {
  //     console.log("Successfully deleted one document.");
  //   } else {
  //     console.log("No documents matched the query. Deleted 0 documents.");
  //   }
  // } finally {
  //   await client.close();
  // }

  // ! menghapus lebih dari 1 data berdasarkan kriteria
  // try {
  //   const result = await collectionName.deleteMany({ nama: "franly" });
  //   if (result.deletedCount > 0) {
  //     console.log(`Successfully deleted ${result.deletedCount} documents`);
  //   } else {
  //     console.log("No documents matched the query. Deleted 0 documents.");
  //   }
  // } finally {
  //   await client.close();
  // }
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
