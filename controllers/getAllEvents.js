
const { events } = require("../models/eventModel");

async function handleGetAllEvents(req, res) {
    try {
        const allEvents = await events.find({});
        return res.status(200).json({
            message: 'events fetched',
            allEvents
        });

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        })
    }
}

module.exports = handleGetAllEvents;