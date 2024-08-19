import  express  from 'express';
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',authMiddleware, addToCart);
cartRouter.post('/remove',authMiddleware,removeFromCart);
cartRouter.get('/get',authMiddleware, getCart);

export default cartRouter;  //exporting the router for use in the server.js file.  This is the route for managing shopping carts.  This file is in the routes folder.  The file name is cartRoute.js.  The router is named cartRouter.  It has three routes: add, remove, and get.  The functions for these routes are in the cartController.js file.  This file is in the controllers folder.  The file name
