# Developpment stage
FROM node:12.18-alpine AS base-builder
RUN apk add g++ make python
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["tsconfig.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ./.env /usr/src/app/.env
RUN npm install
ADD . /usr/src/app
RUN npm run build
# CMD npm run dev

# Production stage
FROM node:12.18-alpine AS production
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN npm install --production
COPY --from=base-builder /usr/src/app/dist ./dist
COPY package* ./
EXPOSE 8080
CMD npm start