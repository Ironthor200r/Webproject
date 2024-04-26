const express = require("express");
const mongoose = require('mongoose');
const UserModel = require('./models/users.js');
const cors = require("cors");
const Login = require("./models/login.js");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Project1')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1); // Exit the application if MongoDB connection fails
    });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.post('/support', (req, res) => {
    const { name, surname, email, message } = req.body;

    UserModel.create({ name, surname, email, message })
        .then(user => {
            console.log("User created successfully:", user);
            res.json(user);
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});

app.post('/', (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            if (user.password === password) {
                res.json({ message: "Success" });
            } else {
                res.status(401).json({ error: "Incorrect password" });
            }
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});

app.post('/register', (req, res) => {
    const { name, password, email, phone, address } = req.body;

    UserModel.create({ name, password, email, phone, address })
        .then(user => {
            console.log("User registered successfully:", user);
            res.json(user);
        })
        .catch(err => {
            console.error("Error registering user:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});