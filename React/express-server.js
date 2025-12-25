import database from "./myDatabase.js";
import express from "express";
const app = express();

const port = 3000;

const isDev = process.env.NODE_ENV !== "production";

app.use((req, res, next) => {
  let csp =
    "default-src 'self'; " +
    "img-src 'self' data:; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self';";

  if (isDev) {
    csp += " script-src 'self' 'unsafe-inline' 'unsafe-eval';";
  } else {
    csp += " script-src 'self';"; // safer for production
  }

  res.setHeader("Content-Security-Policy", csp);
  next();
});

app.use(express.json());

//endpoints
app.post("/create-account", (req, res) => {
  const { username, email, password } = req.body;

  const data = [username, email, password];

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "failed to add user",
    });
  }
  database.query(
    "insert into Users (userName, email, password) values (?, ?, ?)",
    data,
    (error, queryResults) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          message: "database error, failed to add user",
        });
      }

      res.status(200).json({
        message: "account created successfully",
      });
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  database.query(
    "select * from Users where userName = ?",
    [username],
    (error, queryResults) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          error: "Account login failed.",
        });
      }

      if (queryResults.length === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      const databasePass = queryResults[0].password;
      if (password.trim() === databasePass) {
        return res.status(200).json({
          success: "Account successfully logged in",
        });
      } else if (password === 0) {
        return res.status(401).json({ error: "fill password" });
      } else {
        return res
          .status(401)
          .json({ error: "Incorrect password or username" });
      }
    }
  );
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
