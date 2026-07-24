import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    fName: {
        type: String,
        trim: true
    },
    lName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now
    },
    pasword: {
        type: String,
        trim:true
    },
    salt: String

});

export default mongoose.model('users', userSchema);