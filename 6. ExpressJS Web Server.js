const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({
  //   nama: "Franly Budi Pramana",
  // });
  res.sendFile(`./index.html`, { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("This is about page");
  res.sendFile(`./about.html`, { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("This is contact page");
  res.sendFile(`./contact.html`, { root: __dirname });
});

app.get("/product/:id/", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
  );
  // ! URL di browser = http://localhost:3000/product/2/?category=2
});

app.use("/", (req, res) => {
  res.status(404);
  // res.send("404");
  res.sendFile(`./404.html`, { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
