// import express
import express from "express";
 
// import function from controller
import { showBarang, showBarangbyID, createBarang, updateBarang, deleteBarang } from "../controllers/barang.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/products', showBarang);
 
// Get Single Product
router.get('/products/:id', showBarangbyID);
 
// Create New Product
router.post('/products', createBarang);
 
// Update Product
router.put('/products/:id', updateBarang);
 
// Delete Product
router.delete('/products/:id', deleteBarang);
 
// export default router
export default router;