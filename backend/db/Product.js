
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: "string",
    price: "string",
    category: "string",
    company: "string",
    userId:"string"
    
});

module.exports = mongoose.model('products',productSchema)