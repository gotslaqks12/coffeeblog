const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coffeeSchema = new Schema(
    {
        name: { type: String, required: true},
        img: String,
        price: Number,
        description: String,
        qty: Number,
    },
);
const coffee = mongoose.model('coffee', coffeeSchema);
module.exports = coffee;