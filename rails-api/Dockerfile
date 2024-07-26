FROM ruby:3.3

# パッケージのインストール
RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

# 作業ディレクトリを指定
WORKDIR /app

# GemfileとGemfile.lockをコピー
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# bundle installを実行
RUN bundle install

# プロジェクトのすべてのファイルをコピー
COPY . /app
