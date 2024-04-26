const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    surname: { type: String, default: '' },
    email: { type: String, default: '' },
    message: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' },
    password: { type: String, default: '' }

});


const UserModel = mongoose.model("users", UserSchema)



module.exports = UserModel