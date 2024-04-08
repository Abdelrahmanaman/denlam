const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const blogSchema = new Schema({
    content: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
});

// Check if the model is already defined
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// Export the model
module.exports = Blog;
