const http = require("http");
const fs = require(`fs`);
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write(`error, page not found`);
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = req.url;
    // ! JIKA MENGGUNAKAN IF
    // if (url === `/contact`) {
    //   renderHTML(`./contact.html`, res);
    // } else if (url === `/about`) {
    //   renderHTML(`./about.html`, res);
    // } else {
    //   renderHTML(`./index.html`, res);
    // }
    // ! JIKA MENGGUNAKAN SWITCH
    switch (url) {
      case `/about`:
        renderHTML(`./about.html`, res);
        break;
      case `/contact`:
        renderHTML(`./contact.html`, res);
        break;
      default:
        renderHTML(`index.html`, res);
        break;
    }
  })
  .listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
