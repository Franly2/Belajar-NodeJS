const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  const students = [
    {
      nama: "Haaland",
      nrp: "02826239",
      jurusan: "Ilmu Hukum",
    },
    {
      nama: "Gabriella",
      nrp: "02834639",
      jurusan: "Psikologi",
    },
    {
      nama: "Abdul",
      nrp: "08326239",
      jurusan: "Teknik Elektro",
    },
  ];
  res.render("index", {
    nama: "Franly B.P.",
    title: "Home Page",
    layout: "layouts/main-layouts",
    students,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    layout: "layouts/main-layouts",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "layouts/main-layouts",
  });
});

// app.get("/product/:id/", (req, res) => {
//   res.send(
//     `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
//   );
//   // ! URL di browser = http://localhost:3000/product/2/?category=2
// });

app.use("/", (req, res) => {
  res.status(404);
  res.sendFile(`./404.html`, { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
