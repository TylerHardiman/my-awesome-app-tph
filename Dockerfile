FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm version
COPY . .
RUN learning-gha.yml
ENV APP_PORT 8080
EXPOSE 8080
CMD ["node","app.js", "learning-gha.yml"]