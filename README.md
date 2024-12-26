# Jibun-Log

自分 Log の開発用リポジトリ。  
自分の日記を通じた、事実に基づく自己分析を支援するアプリ。  
詳細: https://www.canva.com/design/DAGMMUW2zZY/G9-oBAQZCaxpiabiKIrsLg/edit?utm_content=DAGMMUW2zZY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

# 環境構築

## バックエンド

セキュアな情報は\*\*\*で示しており、開発メンバーからもらうこと。

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

3. masterkey を設定する。
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

1. `next-front`ディレクトリに移動する。

```
cd next-front
```

2. ライブラリ等をインストールする。

```
npm i
```

3. 開発サーバを立ち上げる

```
make dev
```

4. 動作確認
   `localhost:3001`にアクセスする。
