# Developpment stage
FROM node:latest AS base-builder
WORKDIR /usr/src/app
COPY ["tsconfig.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
ADD . /usr/src/app
COPY ./.env /usr/src/app/.env
RUN npm cache clean --force
RUN npm install
RUN npm install -g pm2
ADD . /usr/src/app
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=docker
CMD [ "npm", "run", "dev", "pm2-runtime", "./dist/server.js"]

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
# FROM nginx:1.19.0-alpine
# RUN apk add --no-cache --repository http://nl.alpinelinux.org/alpine/edge/main libuv \
#     &&  apk add --update nodejs npm

# WORKDIR /usr/src/app
# RUN ls -l /usr/src/app/
# COPY --from=0  /usr/src/app/ .
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm -rf /docker-entrypoint.d
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# #CMD ["nginx", "-g", "daemon off;","npm", "start"]
# CMD nginx ; exec npm start

FROM base-builder AS prod
WORKDIR /usr/src/app
RUN npm install --production
COPY --from=base-builder /usr/src/app/dist ./dist
COPY package* ./
EXPOSE 8080
ENV NODE_ENV=production
CMD ["npm", "start", "pm2-runtime", "./dist/server.js"]