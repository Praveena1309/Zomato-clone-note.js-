const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const mealtypeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('eww', mealtypeSchema, 'mealtype');