FROM node:12-alpine

RUN adduser -S _Vue-Template
USER _Vue-Template
RUN mkdir /home/_Vue-Template
WORKDIR /home/_Vue-Template
COPY --chown=_Vue-Template:root . .
WORKDIR backend

RUN npm ci
RUN npm run build
