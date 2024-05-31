# ゴミ捨て方が分かるアプリ

## 目次

1.  [はじめに](#introduction)
2.  [トピックの概要](#overview-of-topics)
3.  [環境設定](#environment)
4.  [アプリのテスト](#installing-dependencies)
5.  [参考資料](#resources)
6.  [コントリビューション](#contributing)

## イントロダクション

ゴミ捨て快適アプリの実装

## トピックの概要

自治体によって様々なゴミ捨てルール、ゴミ捨て場所を検索できるアプリを実装します

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

### development

DB_USER : user
DB_NAME : garbage_station

### production

DATABASE_URL : render/innerURL
NODE_ENV : production

## アプリのテスト

npm run dev 　を実施
localhost:3000 にアクセスして、アプリ画面が立ち上がることを確認してください

### database

Miro 参照
