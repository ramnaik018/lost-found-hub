import express, {Request, Response,Router} from 'express';
// express is used to instantiate the app in index.ts
// where as {Request ,Response ,Router} are names imports which are directly used by TS for type checking 

// Service imported to be used inside this router to carry out bussiness logics .
import { foundItemsController } from '../controllers/foundItemsController';
const router:Router=express.Router();

router.use(express.json()); // middleware used to parse incoming req into json and make data available at req.body

// ALL THE REQUESTS COMING HERE ARE HAVING THE ENDPOINT AS /found/
router.get("/", foundItemsController.getAllFoundItems);
router.get("/:id", foundItemsController.getFoundItemById);
router.post("/", foundItemsController.createFoundItem);
router.put("/:id", foundItemsController.updateFoundItem);
router.delete("/:id", foundItemsController.deleteFoundItem);

export default router;


/*
SINGLE EXPORT FROM A FILE
 we use export default at the end only once if we have only one thing to export to ,
 and to import these we use regular import statement like import foundRouter from "path"

 we can import them with any name 


 MULTIPLE EXPORTS FROM A FILE
 here we dont explicitly write export default at the end
 we write export at the beginning at everything which we want to export and while importing they should be imported
 using their exact name inside {}  -> this is called names imports/exports



*/