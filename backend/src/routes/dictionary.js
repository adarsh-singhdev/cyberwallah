const express = require("express");
const Dictionary = require("../models/dictionary");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Dictionary.find().sort({ term: 1 });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dictionary" });
  }
});

module.exports = router;
