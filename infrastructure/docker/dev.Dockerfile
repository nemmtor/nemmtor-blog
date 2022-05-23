FROM node:16-alpine AS base
RUN apk update
WORKDIR /app
RUN yarn global add turbo@1.1.2
COPY . .
RUN yarn install --frozen-lockfile
EXPOSE 3000
CMD yarn dev
