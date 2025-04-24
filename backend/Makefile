GO_IMAGE=golang:1.24
APP_DIR=$(shell pwd)

get:
	docker run --rm -v "$(APP_DIR)":/app -w /app $(GO_IMAGE) go get $(pkg)

tidy:
	docker run --rm -v "$(APP_DIR)":/app -w /app $(GO_IMAGE) go mod tidy

verify:
	docker run --rm -v "$(APP_DIR)":/app -w /app $(GO_IMAGE) go mod verify

build:
	docker-compose build --no-cache

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f backend

# 🔧 追加：バックエンドだけビルド
build-backend:
	docker-compose build --no-cache backend

# 🔧 追加：バックエンドだけ起動
up-backend:
	docker-compose up -d backend

# 🔧 追加：Goファイル変更時に backend を自動ビルド＆再起動
watch-backend:
	watchexec -e go -r -w . "make build-backend && make up-backend"
