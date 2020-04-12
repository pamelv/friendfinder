const router = require("express").Router();
const path = require("path");

router.get("/api/friends", (req, res) => {
  res.sendFile(path.join(__dirname, "../data", "friends.json"));
});

router.post("/api/friends", (req, res) => {
  res.send("get my friends");
});

module.exports = router;
