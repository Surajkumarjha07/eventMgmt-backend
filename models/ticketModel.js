const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    buyer: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    }
    
})

const tickets = mongoose.model("tickets", ticketSchema);
module.exports = tickets;