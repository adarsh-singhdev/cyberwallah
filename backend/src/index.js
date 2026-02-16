const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const dictionaryRoutes = require("./routes/dictionary");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

app.use("/api/dictionary", dictionaryRoutes);
// app.use("/api/case-studies", caseStudiesRoutes);
// app.use("/api/security-explained", securityExplainedRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
