const express = require("express");

// セッションミドルウェアをインポート
// ユーザーがログインしているかどうかを確認したりできる。

const session = require("express-session");
const app = express();

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));

// これは何？？
app.use(
    session({
        secret: "keyboard cat",//秘密鍵
        resave: true,
        saveUninitialized: false,
    })
);

// 特定のルートのルーターをappで機能させる
app.use("/", require("./routes/index"));

app.listen(3000, console.log("Server listening port 3000..."));
