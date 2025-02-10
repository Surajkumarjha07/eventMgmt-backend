const { events } = require("../models/eventModel");

async function handleEventsByCategory(req, res) {
    try {
        const { category } = req.query;
        
        const allEvents = await events.find({ category });        

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

module.exports = handleEventsByCategory;