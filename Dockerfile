# Developpment stage
FROM node:latest AS base-builder
WORKDIR /usr/src/app
COPY ["tsconfig.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
ADD . /usr/src/app
COPY ./.env /usr/src/app/.env
RUN npm cache clean --force
RUN npm install
RUN npm install -g pm2
RUN npm run build

ENV NODE_ENV production
# # ------------------------------------------------------
# # Production Build
# # ------------------------------------------------------
# FROM nginx:1.19.0-alpine
# RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
#     &&  apk add --update nodejs npm

# WORKDIR /usr/src/app
# RUN ls -l /usr/src/app/
# COPY --from=0  /usr/src/app/ .
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm -rf /docker-entrypoint.d
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
# EXPOSE 80
# #CMD ["nginx", "-g", "daemon off;","npm", "start"]
# CMD nginx ; exec npm start

CMD ["pm2-runtime", "./dist/server.js"]