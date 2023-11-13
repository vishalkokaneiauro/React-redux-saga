FROM node:16.16.0-buster as build
WORKDIR /build
COPY package.json package.json
COPY public/ public
