const mongoose = require("mongoose");




const LoginSchema = new mongoose.Schema({
    name: { type: String, default: '' },

    email: { type: String, default: '' },

    password: { type: String, default: '' },
    phone: { type: String, default: '' },
    address: { type: String, default: '' }
});



const Login = mongoose.model("login", LoginSchema)


module.exports = Login