import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    adressLine1: {
        type: String,
    },
    city: {
        type: String,
    },
    county: {
        type: String,
    },
});

const User = mongoose.model("user", userSchema);
export default User;