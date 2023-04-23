const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const passwordSchema = new Schema({
    count: {
        type:Number
    },
}, {
    collection: 'passwords'
  })

module.exports = mongoose.model('password',passwordSchema)