import express from "express";
import database from "./myDatabase.js";
import jwt from "jsonwebtoken";
//declare route
const route = express.Router();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; //if header exists then pproceed tto split, the the [1] is the token

  if (!token) return res.sendStatus(401); //authentication

  //verify the payload
  jwt.verify(token, "binongofeb0206", (err, user) => {
    if (err) return res.sendStatus(403);
    //req.user = user;
    next();
  });
}

route.post("/", (req, res) => {
  const { username, password } = req.body;

  database.query(
    "select * from Users where userName = ?",
    [username],
    (error, results) => {
      if (error) {
        console.log("admin not found");
        return res.status(501).json({
          message: "error",
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          message: "username not found",
        });
      }

      if (results[0].role === "user") {
        return res.status(403).json({
          message: "u dont have permission to access this.",
        });
      }

      const adminPass = results[0].password;
      if (password.trim() != adminPass) {
        console.log("Incorrect password");
        return res.status(401).json({
          message: "incorrect password",
        });
      }

      const token = jwt.sign(
        {
          userID: results[0].userID, //set token payload
          role: results[0].role,
          username: results[0].userName,
        },
        "binongofeb0206",
        { expiresIn: "1hr" }
      );

      res.status(200).json({
        message: "welcome admin",
        token, //send the token to frontend
      });

      console.log("Logged in");
    }
  );
});

route.post("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({
    message: "verified success",
  });
});

export default route;
