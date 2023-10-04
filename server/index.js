const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

const db = mysql.createConnection({
  host: process.env.local.HOST,
  port: process.env.local.PORT,
  user: process.env.local.USER,
  password: process.env.local.PASSWORD,
  database: process.env.local.DATABASE
});

db.connect((err) => {
  if (err) console.log(err);
  console.log("Connected!");
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("works!");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books.books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books.books (`title`, `description`, `cover`, `price`) VALUES (?);";
  const values = [req.body.title, req.body.description, req.body.cover, req.body.price];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json({ sucuss: true, msg: "book has been added" });
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM books.books WHERE id = ?";
  db.query(q, id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const q =
    "UPDATE books.books SET `title` = ?, `description` = ?, `cover` = ?, `price` = ? WHERE id = ?;";
  const values = [req.body.title, req.body.description, req.body.cover, req.body.price, id];
  db.query(q, [...values], (err, data) => {
    if (err) return res.json(err);
    return res.json({ suess: true, msg: "book was updated" });
  });
});

app.listen(process.env.local.SERVER_PORT, () => {
  console.log("server is running!");
});
