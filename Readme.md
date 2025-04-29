# Lost and Found Hub

A TypeScript-based RESTful API for managing lost and found items.

## Project Evolution

This project was originally built with JavaScript and has been migrated to TypeScript to improve type safety and developer experience. The following changes were made:

### JavaScript to TypeScript Migration

1. **Added TypeScript Configuration**
   - Created `tsconfig.json` with appropriate settings for Node.js/Express
   - Configured module resolution and compilation options

2. **Converted JavaScript Files to TypeScript**
   - Changed file extensions from `.js` to `.ts`
   - Added type annotations to function parameters and return values
   - Used TypeScript interfaces for data models

3. **Updated Package Dependencies**
   - Added TypeScript and related packages
   - Added type definitions for Express, Node, and UUID

### API Design Improvements

1. **Added Service Layer**
   - Created service classes to handle business logic
   - Separated data access from route handlers
   - Implemented proper error handling

2. **Enhanced Route Handlers**
   - Added proper HTTP status codes
   - Implemented consistent response formats
   - Added error handling for not found resources

3. **Implemented In-Memory Database**
   - Created a typed database interface
   - Added CRUD operations for both lost and found items
   - Used UUID for unique identifiers

## Features

- Create, read, update, and delete lost items
- Create, read, update, and delete found items
- In-memory database for data storage
- TypeScript for type safety and better developer experience

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### Development Mode

```
npm run dev
```

This will start the server with nodemon, which automatically restarts when files change.

#### Production Mode

1. Build the TypeScript code:
   ```
   npm run build
   ```

2. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Lost Items

- `GET /api/lost` - Get all lost items
- `GET /api/lost/:id` - Get a specific lost item by ID
- `POST /api/lost` - Create a new lost item
- `PUT /api/lost/:id` - Update a lost item
- `DELETE /api/lost/:id` - Delete a lost item

### Found Items

- `GET /api/found` - Get all found items
- `GET /api/found/:id` - Get a specific found item by ID
- `POST /api/found` - Create a new found item
- `PUT /api/found/:id` - Update a found item
- `DELETE /api/found/:id` - Delete a found item

## Project Structure

- `src/` - Source code
  - `config/` - Configuration files
    - `inMemoryDB.ts` - In-memory database implementation
  - `routes/` - API routes
    - `lostRoute.ts` - Routes for lost items
    - `foundRoute.ts` - Routes for found items
  - `services/` - Business logic
    - `lostItemsService.ts` - Service for lost items
    - `foundItemsService.ts` - Service for found items
  - `index.ts` - Application entry point

## Future Improvements

- Add authentication and authorization
- Implement a real database (MongoDB, PostgreSQL)
- Add input validation middleware
- Add API documentation with Swagger/OpenAPI
- Implement pagination, filtering, and sorting
- Add unit and integration tests

## License

ISC