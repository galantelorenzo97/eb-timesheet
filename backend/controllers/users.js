const express = require('express');

const users = require('../models/users');

const router = express.Router();

let userIDCounter = users.countUsers;

router
    .get('/', (req, res) => {
        res.send("Absolutely nothing");
    })
    .post('/addUser', (req, res) => {
        users.addUser(++userIDCounter, req.body.name ? req.body.name : "Nobody");
        console.log(req.body.name);
        res.send("User added successfully!");
    })
    .delete('/deleteUser', (req, res) => {
        users.deleteUser(req.body.userID);
        res.send("User deleted successfully");
    })

module.exports = router;