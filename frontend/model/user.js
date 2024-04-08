import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, minlength: 8 },
});

// Check if the model is already defined
const User = model('User', userSchema) || model('User', userSchema);

export default User;
