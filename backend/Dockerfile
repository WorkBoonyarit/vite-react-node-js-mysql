FROM node:16.14-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node","dist/index.js"]