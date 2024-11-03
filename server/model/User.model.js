import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    firstname: { type: String},
    lastname: { type: String},
    phonenumber : { type : Number},
    address: { type: String},
    profile: { type: String},

    // selectedPlan: { type: String, required: false },
    // mobile: { type: Number, required: false },
    // premium: { type: Number, required: false },
    // paCover: { type: Number, required: false },
    // ncbDiscountAmount: { type: Number, required: false },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);