import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /.+@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength:4
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ['user', 'admin'],
            message: 'Role must be either "user" or "admin"'
        },
        default: 'user'
    }
});


const UserModel = mongoose.model("User", userSchema);

export default UserModel;
