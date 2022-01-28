// Import function from Product Model
import { getBarang, getBarangbyID, insertBarang, updateBarangbyID, deleteBarangbyID } from "../models/barangModel.js";
 
// Get All Products
export const showBarang = (req, res) => {
    getBarang((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Product 
export const showBarangbyID = (req, res) => {
    getBarangbyID(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createBarang = (req, res) => {
    const data = req.body;
    insertBarang(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateBarang = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateBarangbyID(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteBarang = (req, res) => {
    const id = req.params.id;
    deleteBarangbyID(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}