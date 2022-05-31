FROM node:16-alpine AS base
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
ARG SCOPE
ENV SCOPE=${SCOPE}
ENV YARN_CACHE_FOLDER=.yarn-cache

FROM base AS pruner
RUN yarn global add turbo@1.1.2
COPY . .
RUN turbo prune --scope=${SCOPE} --docker

FROM base AS dev-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile

FROM base AS dev
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=dev-deps /app/node_modules ./node_modules
COPY --from=pruner /app/out/full/ .

FROM base AS prod-deps
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=dev-deps /app/${YARN_CACHE_FOLDER} /${YARN_CACHE_FOLDER}
RUN yarn install --frozen-lockfile --production --prefer-offline
RUN rm -rf /app/${YARN_CACHE_FOLDER}

FROM base AS builder
COPY --from=dev-deps /app/ .
COPY --from=pruner /app/out/full/ .
COPY .prettierrc .
RUN yarn turbo run build --scope=${SCOPE}
RUN find . -name node_modules | xargs rm -rf

FROM base AS runner
COPY --from=prod-deps /app/ .
COPY --from=builder /app/ .
EXPOSE 1337
CMD yarn workspace ${SCOPE} start
