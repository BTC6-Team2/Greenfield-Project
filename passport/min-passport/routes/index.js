const express = require("express");
const path = require("path");
// routerが何してるのかわからん。そらわからんわ使ったことない。
// appと何が違うの？
// 特定のルートを管理する者らしい
const router = express.Router();

// ここの動きも全くわからん
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

//   passportの初期化ミドルウェアをルーターに設定 passportがリクエストに対して動作する。
router.use(passport.initialize());

// テンプレートエンジンを使ってビュー(HTMLファイル)をレンファリングし、クライアントに返す。
// /にgetリクエストが来た時、indexテンプレートをレンダリングして返す。

router.get("/", (req, res) =>
    res.render(path.join(__dirname, "../views/index"))
);
router.get("/failure", (req, res) => res.sendStatus(418));

// reqをコンソール
// 認証を行う。
// 認証に失敗した時に/failureにリダイレクト処理をする。
// session falseはセッションは使用しないと指定
// 認証が成功するとreqにユーザー情報が追加される。

// 最後にユーザをコンソールし、Succesと表示する。

router.post(
    "/",
    (req, res, next) => {
        console.log("認証みどるうぇあ 1");
        next();
    },
    // passport-localというPassportの認証戦略を実行している
    // passport.useでLocalStrategyを設定しているため、この設定をもとに動作
    passport.authenticate("local", {
        session: false,
        failureRedirect: "/failure",
    }),
    (req, res) => {
        console.log(req.user);
        res.send("Success");
    }
);

module.exports = router;
