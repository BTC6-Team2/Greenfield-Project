const express = require("express");
const path = require("path");

// 特定のルートを管理する者らしい
const router = express.Router();

// passportとpassportの認証戦略を設定
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User1 = {
    name: "Taro",
    password: "Taro123",
};

// passportのローカル認証戦略を設定。
// ユーザー名とパスワードの検証を行い、認証結果を返す。

passport.use(
    new LocalStrategy((username, password, done) => {
        if (username !== User1.name) {
            // ユーザー名が一致しない場合のエラー
            console.log("a");
            return done(null, false);
        } else if (password !== User1.password) {
            // パスワードが一致しない場合のエラー
            console.log("i");

            return done(null, false);
        } else {
            // Success and return user information.
            console.log("u");

            return done(null, { username: username, password: password });
        }
    })
);
// (セッション管理)

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

router.get("/", (req, res) =>
    res.render(path.join(__dirname, "../views/index"), { user: req.user })
);
// ログイン失敗時のルート
router.get("/failure", (req, res) => {
    console.log("失敗ルート");
    console.log(req.session);
    res.send("Failure");

    //-----------------失敗時だからログイんポイント
});
// ログイン成功時のルート
router.get("/success", (req, res) => {
    console.log("成功ルート");
    console.log(req.session);
    res.redirect("/");
    //----------------成功時のエンドポイントHome?
});

// reqをコンソール
// 認証を行う。
// 認証に失敗した時に/failureにリダイレクト処理をする。
// session falseはセッションは使用しないと指定
// 認証が成功するとreqにユーザー情報が追加される。

// 最後にユーザをコンソールし、Succesと表示する。

router.post(
    "/",
    passport.authenticate("local", {
        failureRedirect: "/failure",
        successRedirect: "/success",
    })
);
router.post("/logout", (req, res) => {
    // logoutするとセッションがクリアにされる。
    req.session.passport.user = undefined;
    res.redirect("/");
});
module.exports = router;
