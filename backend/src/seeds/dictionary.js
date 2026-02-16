const mongoose = require("mongoose");
require("dotenv").config();

const Dictionary = require("../models/dictionary");

const data = [
  {
    term: "Phishing",
    definition: "Attack using fake emails or messages",
  },
  {
    term: "XSS",
    definition: "Injection of malicious scripts into web pages",
  },
  {
    term: "SQL Injection",
    definition: "Attack using malicious SQL queries",
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Dictionary.deleteMany();
  await Dictionary.insertMany(data);
  console.log("Dictionary seeded");
  process.exit();
}

seed();
