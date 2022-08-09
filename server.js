console.log("Serve some pages from the root, baby!");

const express = require("express");
const app = express();

const server = app.listen(3000, () => { // create a HTTP server on port 3000
  console.log(`Express running → PORT ${server.address().port}`)
});

app.use(express.static(__dirname, { // host the whole directory
  extensions: ["html", "htm", "gif", "png", "css", "svg", "js"],
}))

console.log(__dirname);
app.get("/", (req, res) => {
  return res.sendFile(__dirname  + "/index.html")
})

app.get("*", (req, res) => {
  return res.sendStatus(404)
})