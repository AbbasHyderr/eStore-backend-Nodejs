const express = require("express");
const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: (value) => {
                const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                return value.match(re);
            },
            message: "Please enter valid Email Address",

        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return value.length > 8;
            },
            message: "Password should be * characters long",

        }
    },
    address: {
        type:  String,
        trim: true,
        default: ''

    },

    type: {
        type: String,
        default: "user"
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;
