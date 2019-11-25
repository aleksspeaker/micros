# micros
This setup consists of 3 main services: Service-A, Service-B and Mongo.
### Service-A
Service-A is a public API wich proxies all requests to Service-B.
### Service-B
Service-B is a CRUD API wich uses Mongo as database.

Both the Service-A and the Service-B we built using Loopback 4 framework.

## Start the application
`docker-compose up --build` for starting the application.
