# Starter Kit App

A full-stack Todo application built with React (Client) and Node.js/Express (Server).

## Prerequisites

- Node.js (v18 or higher)
- Docker Desktop
- MongoDB (via Docker)

## Project Structure

```
starter-kit/
├── server/         # Express/Node.js server
├── client/         # React/Vite application
└── docker-compose.yml
```

## Project setups

The project uses different development setups for client and server:

### Client
- Uses Vite as the build tool and development server
- Testing with Vitest
- Hot Module Replacement (HMR) for fast development

### Server
- Standard Node.js TypeScript setup
- Development using tsx
- Production build using TypeScript compiler (tsc)
- Testing with Jest

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd starter-kit
```

2. **Start MongoDB**
```bash
docker run -d -p 27017:27017 --name todo-mongodb mongo:latest
```

3. **Setup Environment Variables**

In the server directory, create `.env`:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/starter-kit
JWT_SECRET=your-secret-key
```

4. **Install Dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

5. **Run the Application**
```bash
# From the root directory
npm run dev
```

The application will be available at:
- Client: http://localhost:5173
- Server: http://localhost:5001
- MongoDB: localhost:27017

## Available Scripts

In the project root:
- `npm run dev` - Runs both client and server in development mode
- `npm run install:all` - Installs dependencies for both client and server

In the server directory:
- `npm run dev` - Starts the development server using tsx watch
- `npm build` - Builds the TypeScript code to JavaScript
- `npm start` - Runs the built JavaScript code in production mode
- `npm run test` - Runs tests using Jest
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues

In the client directory:
- `npm run dev` - Starts the Vite development server
- `npm run test` - Runs tests
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues

## Technologies Used

Client:
- React
- TypeScript
- Vite
- Vitest
- TailwindCSS
- React Query
- React Router

Server:
- Node.js
- Express
- TypeScript
- MongoDB/Mongoose
- JWT Authentication
- Jest

Development:
- ESLint
- Docker

## Development Status

Current features implemented:
- Project structure setup
- Development environment configuration
- MongoDB connection
- Basic server setup

Next steps:
- Implement authentication
- Create Todo CRUD operations
- Design and implement client UI
- Add testing