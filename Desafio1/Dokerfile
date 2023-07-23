FROM golang:1.20.6 AS build
WORKDIR /app
COPY . /app
RUN CGO_ENABLED=0 GOOS=linux go build -o api Desafio1.go
# stage imagem final
FROM scratch
WORKDIR /app
COPY --from=build /app/api ./
EXPOSE 8000
CMD [ "./api" ]