const ytdl = require("ytdl-core");
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Get youtube video links.");
});

app.get("/getLink/:id", (req, res) => {
  ytdl
    .getInfo(req.params.id, {
      filter: (format) => format.container === "mp4",
    })
    .then((info) => {
      res.send(info.formats);
    })
    .catch (err => {
      res.send('Invalid ID');
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})