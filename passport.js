const express = require("express");
const app = express();
const config = require("./knexfile");

const environment = process.env.DATABASE_URL ? "production" : "development";
const knex = require("knex")(config[environment]);

const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
//----------------------------------

app.use(express.json());

const User1 = {
  name: "Hanako",
  password: "Taro123",
};

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username !== User1.name) {
      // Error
      return done(null, false);
    } else if (password !== User1.password) {
      // Error
      return done(null, false);
    } else {
      // Success and return user information.
      return done(null, { username: username, password: password });
    }
  })
);

router.use(passport.initialize());
//   router.get("/", (req, res) => res.send("Login"));

router.post(
  "/api/login",
  (req, res, next) => {
    // console.log(req);
    next();
  },
  passport.authenticate("local", {
    session: false,
    failureRedirect: "/api/failure",
  }),
  (req, res) => {
    // console.log(req.user);
    res.send("出来たん");
  }
);

router.get("/api/failure", (req, res) => {
  res.send("だめ");
});

module.exports = router;
