const express = require("express");
const path = require("path");
const environment = process.env.DATABASE_URL ? "production" : "development";

// 特定のルートを管理する者らしい
const router = express.Router();

// passportとpassportの認証戦略を設定
const passport = require("passport");

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/signin");
}

require("dotenv").config({
  path: "./.env",
});
//-------------Github 下準備------------------------
const GitHubStrategy = require("passport-github2").Strategy;
const siteURL =
  environment === "production"
    ? "https://greenfield-project-6urk.onrender.com"
    : "http://localhost:3000";
//-------------Github　strategy------------------------

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${siteURL}/auth/github/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      check = profile;
      if (profile) {
        user = profile;
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);
//-------------Google 下準備------------------------
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//-------------Google　strategy------------------------
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${siteURL}/auth/google/callback`,
    },
    function (accessToken, refreshToken, profile, done) {
      check = profile;
      if (profile) {
        user = profile;
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

// シリアライズ処理 第２引数がセッションに保存される値を指定している。今回はuser object
passport.serializeUser((user, done) => {

  console.log("Serialize ...");
  done(null, user);
});
// デシリアライズ処理
passport.deserializeUser((user, done) => {
  console.log("Deserialize ...");
  done(null, user);

});

//   passportの初期化ミドルウェアをルーターに設定 passportがリクエストに対して動作する。
router.use(passport.initialize());
// セッションを使用するためのミドルウェアを設定します。
router.use(passport.session());

// テンプレートエンジンを使ってビュー(HTMLファイル)をレンファリングし、クライアントに返す。
// /にgetリクエストが来た時、indexテンプレートをレンダリングして返す。



//--------------------Githubの場合-------------------------
router.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })

);

router.get(

  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/failure",
    successRedirect: "/success",
  })

);

//--------------------Googleの場合-------------------------
router.get(

  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })

);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/success",
  })
);

router.get("/items", checkAuthenticated, (req, res,next) => {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
});

// ログイン失敗時のルート
router.get("/failure", (req, res) => {


  console.log("失敗ルート");
  console.log(req.session);
  //   res.send("Failure");
  res.redirect("/signin");
  //-----------------失敗時のエンドポイント
});
// // ログイン成功時のルート
router.get("/success", (req, res) => {
  console.log("成功ルート");
  console.log(req.session);
  res.redirect("/items");
  //----------------成功時のエンドポイント

});

// reqをコンソール
// 認証を行う。
// 認証に失敗した時に/failureにリダイレクト処理をする。
// session falseはセッションは使用しないと指定
// 認証が成功するとreqにユーザー情報が追加される。

// 最後にユーザをコンソールし、Succesと表示する。

router.get('/logout', function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });

});
module.exports = router;
