const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    start_time: {
        type: String,
        required: true
    },

    end_time: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    apartment: {
        type: String,
        required: false
    },

    region: {
        type: String,
        required: false
    },

    venue: {
        type: String,
        required: false
    },

    price: {
        type: String,
        required: false,
        default: 0
    },

    capacity: {
        type: String,
        required: true,
        default: 0
    },

    attendees: {
        type: Number,
        required: false,
        default: 0
    },

    image: {
        type: String,
        required: true
    }
})

const events = mongoose.model("events", eventSchema)
module.exports = { events, eventSchema };