// import connection
import db from "../config/db.js";
 
// Get All Products
export const getBarang = (result) => {
    db.query("SELECT * FROM barang", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Product
export const getBarangbyID = (id, result) => {
    db.query("SELECT * FROM barang WHERE id_barang = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Product to Database
export const insertBarang = (data, result) => {
    db.query("INSERT INTO barang SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updateBarangbyID = (data, id, result) => {
    db.query("UPDATE barang SET nama_barang = ?, harga = ?,, jumlah =? WHERE id_barang = ?", [data.nama_barang, data.harga, data.jumlah, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteBarangbyID = (id, result) => {
    db.query("DELETE FROM barang WHERE id_barang = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}