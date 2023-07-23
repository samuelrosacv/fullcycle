FROM golang:1.20.6 AS build
WORKDIR /app
COPY . /app
RUN CGO_ENABLED=0 GOOS=linux go build -o Desafio1 Desafio1.go
# stage imagem final
FROM scratch
WORKDIR /app
COPY --from=build /app/Desafio1 ./
EXPOSE 8000
CMD [ "./Desafio1" ]