FROM node:23-alpine AS backend-builder

WORKDIR /app/backend

COPY backend/package*.json ./

RUN npm ci

COPY backend/ .

RUN npm run build

FROM node:23-alpine AS frontend-builder

WORKDIR /app/frontend

COPY frontend/package*.json ./

RUN npm ci

COPY frontend/ .

RUN npm run build

FROM node:23-alpine

WORKDIR /app

COPY --from=backend-builder /app/backend/package*.json ./
COPY --from=backend-builder /app/backend/node_modules ./node_modules
COPY --from=backend-builder /app/backend/dist ./dist

COPY --from=frontend-builder /app/frontend/dist ./public

CMD ["npm", "run", "start"]