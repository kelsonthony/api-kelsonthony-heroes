# Docker

# comandos
$ docker ps
firewall-cmd ––permanent ––add-port=80/tcp

docker run --name some-postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=kyxxp2 -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker run \
    --name postgres \
    -e POSTGRES_USER=root \
    -e POSTGRES_PASSWORD=kyxxp2 \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps

docker exec -it postgres /bin/bash


docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer  

http://localhost:8080/


## ---- MONGODB
 
firewall-cmd --zone=public --add-port=27017/tcp --permanent

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhadmin \
    -d \
    mongo:4
## Start MongoDB
docker run -p 27017:27017 mongodb

## Mongo Client
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

http://localhost:3000/

docker container exec -it mongodb \
    mongo --host localhost -u admin -p senhadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'kelson', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhadmin --authenticationDatabase herois \
    --eval "db.getSiblingDB('herois').createUser({user: 'kelson', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"


Teste com o Mocha mocha *.test.js

Run Test
npm run test:watch


http://192.168.1.19:4000/herois

http://192.168.1.19:4000/herois?skip=0&limit=10&nome=flash

# Packages Json NPM 

npm i hapi

npm i vision inert hapi-swagger
npm i jsonwebtoken
npm i hapi-auth-jwt2
npm i bcrypt 
npm i dotenv
npm i -g cross-env

cross-env NODE_ENV=prod npm t

cross-env NODE_ENV=dev npm t

npm run test:prod


heroku

npm i -g heroku


heroku login

heroku apps:list

heroku apps:create api-herois-v1


heroku apps:create api-kelsonthony-heroes

git remote -v
heroku git -v

heroku git:remote --app api-kelsonthony-heroes

git status
git add .
git commit -m "v1"
git push heroku main

npm i cross-env

git add . && git commit -m "v5" && git push heroku main


https://api-kelsonthony-heroes.herokuapp.com/


PM2

npm install -g pm2

npm install pm2

"scripts": {
  "prod:start": "pm2-runtime app.js"
}


pm2 start --name herois -i 10 api.js

pm2 monit

pm2 kill

heroku config:set PM2_PUBLIC_KEY=a0ueats246wbicw PM2_SECRET_KEY=01wx6ml5rfdk7cs

PM2_PUBLIC_KEY=a0ueats246wbicw
PM2_SECRET_KEY=01wx6ml5rfdk7cs

