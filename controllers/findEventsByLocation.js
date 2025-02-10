const { events } = require("../models/eventModel");

async function handleEventsByLocation(req, res) {
    try {
        const { location } = req.query;

        const allEvents = await events.find({ location });

        res.status(200).json({
            message: "events fetched",
            allEvents
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = handleEventsByLocation;