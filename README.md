# Starter Kit App

A full-stack Todo application built with React (Frontend) and Node.js/Express (Backend).


## Prerequisites

- Node.js (v18 or higher)
- Docker Desktop
- MongoDB (via Docker)

## Project Structure

```
starter-kit/
├── backend/         # Express/Node.js backend
├── frontend/         # React/Vite application
└── docker-compose.yml
```

## Project setups

The project uses different development setups for frontend and backend:

### Frontend
- Uses Vite as the build tool and development backend
- Testing with Vitest
- Hot Module Replacement (HMR) for fast development

### Backend
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

In the backend directory, create `.env`:
```
PORT=5001
MONGODB_URI=mongodb://localhost:27017/starter-kit
JWT_SECRET=your-secret-key
NODE_ENV=''
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
- `npm run format` - Format for both frontend and backend
- 
In the backend directory:
- `npm run dev` - Starts the development backend using tsx watch
- `npm build` - Builds the TypeScript code to JavaScript
- `npm start` - Runs the built JavaScript code in production mode using tsx
- `npm run test` - Runs tests using Jest
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues
- `npm run format` - Format prettier issues

In the frontend directory:
- `npm run dev` - Starts the Vite development backend
- `npm run test` - Runs tests
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues
- `npm run format` - Format prettier issues

## CI/CD

### GITHUB ACTIONS
GitHub Actions CI configured for frontend and backend, running automatically on pull requests.
## Local CI
- **Husky:** Manages Git hooks to run checks before commits
- **lint-staged**: Runs linters only on staged files for faster checks
- Automatically installed with `npm install`


## Technologies Used

Frontend:
- React
- TypeScript
- Vite
- Vitest
- TailwindCSS
- React Query
- React Router

Backend:
- Node.js
- Express
- TypeScript
- MongoDB/Mongoose
- JWT Authentication
- Jest

Development:
- ESLint
- Docker
- Husky (Git hooks)
- lint-staged

## Documentation
- [Adding New Entities](https://github.com/hareldigit/starter-kit/wiki/Adding%E2%80%90New%E2%80%90Entities)

## Development Status

Current features implemented:
- Project structure setup
- Development environment configuration
- MongoDB connection
- Basic backend setup
- Local CI with Husky and lint-staged

Next steps:
- Implement authentication
- Create Todo CRUD operations
- Design and implement frontend UI
- Add testing