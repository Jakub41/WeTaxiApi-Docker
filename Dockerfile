# Developpment stage
FROM node:12.18-alpine AS base-builder
RUN apk update
RUN apk add --no-cache python make g++
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY ["tsconfig.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
ADD . /usr/src/app
COPY ./.env /usr/src/app/.env
RUN npm cache clean --force
RUN npm install

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.19.0-alpine
RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
    &&  apk add --update nodejs npm

WORKDIR /usr/src/app
RUN ls -l /usr/src/app/
COPY --from=0  /usr/src/app/ .
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /docker-entrypoint.d
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;","npm", "start"]
CMD nginx ; exec npm start
