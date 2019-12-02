FROM node:10-alpine as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build


FROM nginx:1-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/src/app

