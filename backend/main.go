// backend/main.go
package main

import (
    "github.com/google/uuid"
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Request ID: %s", uuid.NewString())
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Starting server on :8080")
    http.ListenAndServe(":8080", nil)
}
