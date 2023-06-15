const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const menuitemSchema = new Schema({
        
    restaurantId:{
        type: String,
        required: true
    }

    })

module.exports = mongoose.model('menu', menuitemSchema, 'menu');