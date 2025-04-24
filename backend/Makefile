GO_IMAGE=golang:1.20
APP_DIR=$(shell pwd)

get:
	docker run --rm -v "$(APP_DIR)":/app -w /app $(GO_IMAGE) go get $(pkg)

tidy:
	docker run --rm -v "$(APP_DIR)":/app -w /app $(GO_IMAGE) go mod tidy
