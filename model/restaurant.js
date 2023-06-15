const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        city:{
            type:Number,
            required:true
        },
        city_name:{
            type: String
        }
    })

module.exports = mongoose.model('ewww', restaurantSchema, 'restaurant');