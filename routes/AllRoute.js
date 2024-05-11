import express from 'express';
// import { create, deleteUser, fetch, update } from '../controller/userController.js';
import { createReliefGood, getAllReliefGoods, getReliefGoodById, updateReliefGoodById, deleteReliefGoodById } from '../controller/reliefGoodController.js';

const router = express.Router();

//* all user routes

// route.get("/fetch", fetch)
// route.post("/create", create)
// route.put("/update/:id", update)
// route.delete("/deleteUser/:id",deleteUser)

//* All relief good routes

// Create a new ReliefGood
router.post('/create-relief-good', createReliefGood);

// Get all ReliefGoods
router.get('/relief-goods', getAllReliefGoods);

// Get a single ReliefGood by ID
router.get('/relief-goods/:id', getReliefGoodById);

// Update a ReliefGood by ID
router.put('/relief-goods/:id', updateReliefGoodById);

// Delete a ReliefGood by ID
router.delete('/relief-goods/:id', deleteReliefGoodById);

export default router;
