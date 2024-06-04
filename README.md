# name ゴミ捨て方が分かるアプリ

## 目次

1.  [はじめに](#introduction)
2.  [トピックの概要](#overview-of-topics)
3.  [ファイル構成](#ファイル構成)
3.  [環境設定](#environment)
4.  [アプリのテスト](#installing-dependencies)
5.  [参考資料](#resources)
6.  [コントリビューション](#contributing)
<a id="introduction"></a>
## イントロダクション

ゴミ捨て快適アプリの実装
<a id="overview-of-topics"></a>
## トピックの概要

自治体によって様々なゴミ捨てルール、ゴミ捨て場所を検索できるアプリを実装します
<a id="ファイル構成"></a>
## ファイル構成
```
Greenfield-Project
├── db
│   ├── migrations
│   │   ├── 20240529081730_item_table.js
│   │   ├── 20240529081841_type_table.js
│   │   ├── 20240529081903_station_table.js
│   │   └── 20240529103126_item_table_add_id.js
│   └── seeds
│       ├── 001-type.js
│       ├── 002-item.js
│       └── 003-station.js
├── frontend
│   ├── public
│   │   ├── images
│   │   │   ├── facebook.png
│   │   │   ├── gabage.png
│   │   │   ├── github.jpeg
│   │   │   ├── github.png
│   │   │   ├── kabegami.gif
│   │   │   ├── life.png
│   │   │   ├── line.png
│   │   │   ├── okazaki-city.png
│   │   │   ├── what-town.png
│   │   │   ├── X.jpg
│   │   │   └── yahoo.png
│   │   └── vite.svg
│   ├── src
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── compronents
│   │   │   ├── icons
│   │   │   │   ├── Aqua.png
│   │   │   │   ├── Aquamarine.png
│   │   │   │   ├── Brown.png
│   │   │   │   ├── Default.png
│   │   │   │   ├── facebook.png
│   │   │   │   ├── github.jpeg
│   │   │   │   ├── images.png
│   │   │   │   ├── kabegami.gif
│   │   │   │   ├── line.png
│   │   │   │   ├── X.jpg
│   │   │   │   └── yahoo.png
│   │   │   ├── Banner.css
│   │   │   ├── BannerLeft.jsx
│   │   │   ├── BannerRight.jsx
│   │   │   ├── DisplayDetail.jsx
│   │   │   ├── DisplayResult.jsx
│   │   │   ├── Header.css
│   │   │   ├── Header.jsx
│   │   │   ├── Map.jsx
│   │   │   ├── Mapsample.jsx
│   │   │   ├── NoMatch.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBox.css
│   │   │   ├── SearchBox.jsx
│   │   │   ├── signin.css
│   │   │   └── SignIn.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── routes
│   └── index.js
├── test
│   └── _server.js
├── .gitignore
├── knexfile.js
├── life.png
├── okazaki-city.png
├── package-lock.json
├── package.json
├── README.md
├── server.js
└── what-town.png
```

## 開発環境
```
・JavaScript             ver:1.88.1
・Render
・PostSQL                ver:8.11.5
・knex                   ver:3.1.0
・express                ver:4.19.2
・Passport-github2       ver:0.1.12
・mocha                  ver:10.4.0"
・Leaflet                
```
## 環境設定

github のソースコードを fork して自分の PC に clone してください

<ブランチを作成してそのブランチに切り替えるコマンド> -c は create の略
git switch -c <ブランチ name>

現在のブランチの確認
git branch で確認

ローカル環境にデータベースを作成
createdb garbage_station

npm run build を実施
バックエンド：パッケージインストール、マイグレーション実行
フロントエンド：パッケージインストール、ビルド実行

## 環境変数
```
DB_USER : user
DB_NAME : garbage_station
DATABASE_URL : render/innerURL
NODE_ENV : production
GITHUB_CLIENT_ID : git のクライアント ID を取得して設定してください
GITHUB_CLIENT_SECRET : git のシークレットキーを取得して設定してください
GOOGLE_CLIENT_ID : Google のクライアント ID を取得して設定してください
GOOGLE_CLIENT_SECRET : Google のシークレットキーを取得して設定してください
```
## 仕様

## 開発者

づっか
ささっち
まっちゃん
ぐっち

## アプリのテスト

npm run dev 　を実施
localhost:3000 にアクセスして、アプリ画面が立ち上がることを確認してください

### database

Miro 参照
