FROM node:12.18-alpine
RUN apk add g++ make python
EXPOSE 8080
ENV NODE_ENV dev
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ./.env /usr/src/app/.env
RUN npm install
ADD . /usr/src/app
CMD [ "npm", "start" ]
