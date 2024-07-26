# Jibun-Log

自分 Log の開発用リポジトリ

# 環境構築

## バックエンド
セキュアな情報は***で示しており、開発メンバーからもらうこと。

1. `rails-api`ディレクトリに移動する。

```
cd rails-api
```

2. 環境変数を配置する。
   以下のような`.env`ファイルを作成し、`rails-api`ディレクトリに配置する。

```
MYAPP_DATABASE_USERNAME=***
MYAPP_DATABASE_PASSWORD=***
```
3. masterkeyを設定する。
以下のような`master.key`ファイルを作成し、`/rails-api/config`ディレクトリに配置する。
```
******
```

4. Docker を構築する。

```
docker compose build
```

5. データベースを作成する。

```
docker-compose run web rails db:create
```

6. Docker を立ち上げる

```
docker compose up
```

7. 動作確認
   以下のようにテスト用の API にアクセスする。

```
curl http://localhost:3000/health_check
```

## フロントエンド

node が PC にインストールされている必要があります。

1. `frontend`ディレクトリに移動する。

```
cd frontend
```

2. ライブラリ等をインストールする。

```
npm i
```

3. 開発サーバを立ち上げる

```
npm run dev
```

4. 動作確認
   `localhost:5173`にアクセスする。
