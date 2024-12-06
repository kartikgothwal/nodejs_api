import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
