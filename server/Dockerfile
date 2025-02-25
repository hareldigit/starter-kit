# Build stage
FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:23-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist

# TODO: Create a proper .env file on the server with required environment variables (JWT_SECRET, etc.)
# and then remove this COPY instruction
#COPY .env ./

EXPOSE 5001
CMD ["npm", "run", "start"]