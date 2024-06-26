const express = require("express");
const app = express()
const path = require("path");
const PORT=3000
app.use("/", express.static(path.join(__dirname, "public")));
app.get('/check', (req, res) => {
  res.send('Hello World!')
})
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})