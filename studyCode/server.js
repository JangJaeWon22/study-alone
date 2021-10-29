const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const app = express();
const { sequelize } = require("./models");
require("dotenv").config();
const passport = require("passport");
const pageRouter = require("./routes/page");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routing
app.use("/", pageRouter);

//Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
