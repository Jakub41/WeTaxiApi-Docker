FROM node:12.18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ./.env ./.env
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 4000 27017 5000
CMD node index.js