import e from "express";
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

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`server started at port: ${port}`);
});
