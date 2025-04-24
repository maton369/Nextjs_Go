GO_IMAGE=golang:1.21
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

watch:
	watchexec -e go -r -w . "make build && make up"
