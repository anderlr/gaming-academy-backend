# Stage 1 - Build
FROM node as builder

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

# Stage 2 - Production Container
FROM node
WORKDIR /usr/app
COPY package*.json ./

RUN npm install --production

COPY --from=builder /usr/app/dist ./dist

CMD node dist/index.js