# Todo App

A full-stack Todo application built with React (Frontend) and Node.js/Express (Backend).

## Prerequisites

- Node.js (v18 or higher)
- Docker Desktop
- MongoDB (via Docker)

## Project Structure

```
todo-app/
├── backend/         # Express/Node.js server
├── frontend/        # React/Vite application
└── docker-compose.yml
```

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd todo-app
```

2. **Start MongoDB**
```bash
docker run -d -p 27017:27017 --name todo-mongodb mongo:latest
```

3. **Setup Environment Variables**

In the backend directory, create `.env`:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your-secret-key
```

4. **Install Dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

5. **Run the Application**
```bash
# From the root directory
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001
- MongoDB: localhost:27017

## Available Scripts

In the project root:
- `npm run dev` - Runs both frontend and backend in development mode
- `npm run install:all` - Installs dependencies for both frontend and backend

In the backend directory:
- `npm run dev` - Starts the development server
- `npm run test` - Runs tests
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues

In the frontend directory:
- `npm run dev` - Starts the Vite development server
- `npm run test` - Runs tests
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues

## Technologies Used

Frontend:
- React
- TypeScript
- Vite
- TailwindCSS
- React Query
- React Router

Backend:
- Node.js
- Express
- TypeScript
- MongoDB/Mongoose
- JWT Authentication

Development:
- ESLint
- Docker
- Vitest

## Development Status

Current features implemented:
- Project structure setup
- Development environment configuration
- MongoDB connection
- Basic server setup

Next steps:
- Implement authentication
- Create Todo CRUD operations
- Design and implement frontend UI
- Add testing