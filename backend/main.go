package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"sort"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Item struct {
	Name  string
	Kind  string
	Price float64
}

var errorLogger = log.New(os.Stderr, "ERROR ", log.Llongfile)

func show(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	kind := req.QueryStringParameters["kind"]
	minPrice, err := strconv.ParseFloat(req.QueryStringParameters["minPrice"], 64)
	if err != nil {
		return clientError(http.StatusBadRequest)
	}
	maxPrice, err := strconv.ParseFloat(req.QueryStringParameters["maxPrice"], 64)
	if err != nil {
		return clientError(http.StatusBadRequest)
	}

	pdList := search(minPrice, maxPrice, kind)
	sort.Slice(pdList, func(i, j int) bool {
		return pdList[i].Price < pdList[j].Price
	})
	js, err := json.Marshal(pdList)
	if err != nil {
		return serverError(err)
	}
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Headers:    map[string]string{"Access-Control-Allow-Origin": "*"},
		Body:       string(js),
	}, nil

}

func serverError(err error) (events.APIGatewayProxyResponse, error) {
	errorLogger.Println(err.Error())
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusInternalServerError,
		Body:       http.StatusText(http.StatusInternalServerError),
	}, nil
}

func clientError(status int) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode: status,
		Body:       http.StatusText(status),
	}, nil
}

func main() {
	lambda.Start(show)
}
