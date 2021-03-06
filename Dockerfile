# Developpment stage
FROM node:lts AS base-builder
ARG NODE_ENV="dev"
ARG NODE_ENV="prod"
WORKDIR /usr/src/app
COPY ["tsconfig.json", "package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ./.env /usr/src/app/.env
EXPOSE 8080

ENV NODE_ENV=development
RUN npm install
ADD . /usr/src/app
CMD npm run dev
RUN npm run build

# Production stage
FROM base-builder AS production
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN npm install --production
COPY --from=base-builder /usr/src/app/dist ./dist
COPY package* ./
CMD npm start
