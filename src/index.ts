// All the code for express setup and delegating the routes to appropriate controllers go here

import express, { Request, Response } from 'express'; // Directly import type syntax can be used with type script(Modules)
import lostItemsRouter from './routes/lostItemsRoute';
import foundItemsRouter from './routes/foundItemsRoute';
import { seedDatabase } from './config/seedData';

const app = express(); // app is an instance of express 

app.use(express.json()); // to parse the body of the request 

app.get("/", (req: Request, res: Response) => {
    res.send("welcome to the lost and found hub..!");
});

app.use("/lost", lostItemsRouter);
app.use("/found", foundItemsRouter);

const PORT = process.env.PORT || 3000; 
//in Prod environments , env provides a port number for the execution of our app
// command:  PORT 4048 ts-node src/index.ts

//Here process.env.PORT will pick up 4048 if manually provided . OR else it will fall back to 3000.

// Seed the database with dummy data
//seedDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 