# ビルドステージ
FROM golang:1.23.2-alpine3.20 AS builder

WORKDIR /app

# ソースコードとモジュールファイルをすべてコピー
COPY app/ .

# 依存関係の取得と整備
RUN go mod tidy && go get ./...

# アプリケーションをビルド
RUN go build -o main .

# 実行ステージ
FROM alpine:latest

WORKDIR /root/

# ビルドしたバイナリをコピー
COPY --from=builder /app/main .

# アプリケーションを実行
CMD ["./main"]

# ポート8080を公開
EXPOSE 8080
