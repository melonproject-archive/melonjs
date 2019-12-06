FROM node:11  as build
WORKDIR /app

COPY yarn.lock package.json ./
RUN yarn --frozen-lockfile --pure-lockfile --development && yarn cache clean

COPY . .
RUN yarn codegen

CMD ["yarn", "watch"]
