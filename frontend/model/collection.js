const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const collectionSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    description: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    images: [{
        type: String,
        trim: true
    }]
});

// Check if the model is already defined
const Collection = mongoose.models.Collection || mongoose.model('Collection', collectionSchema);

// Export the model
module.exports = Collection;
