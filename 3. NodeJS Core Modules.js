// Core Module
// File System
// write file
const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("node:process");
const { connect } = require("http2");
const rl = readline.createInterface({ input, output });
// *memasukkan string  ke file
// ? async
// fs.writeFile("tes.txt", "ini adalah async", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
// ? sync
// try {
//   fs.writeFileSync("message.txt", "duar");
// } catch (e) {
//   console.log(2);
// }

// *membuat folder baru
// ? async
// fs.mkdir(`./keren`, (e) => {
//   if (e) throw e;
//   console.log(`success`);
// });
// ? sync
// try {
//   fs.mkdirSync(`./iniSync`);
//   console.log(`success`);
// } catch (e) {
//   console.log(e);
// }

// *membaca isi file
// ? async
// fs.readFile(`./tes.txt`, (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// ? sync
// const bacaSync = fs.readFileSync(`./tes.txt`).toString();
// console.log(bacaSync);

// * pertanyaan
// rl.question(`Masukkan nama lengkap anda : `, (answer) => {
//   console.log(`Halo ${answer}`);
// });

// * Contoh Penggunaann
rl.question(`Masukkan nama : `, (nama) => {
  rl.question(`Masukkan no HP anda  : `, (noHp) => {
    rl.close();
    const contact = { nama, noHp };
    const file = fs.readFileSync(`data/contacts.json`, `utf8`);
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync(`./data/contacts.json`, JSON.stringify(contacts));
  });
});
