const { events } = require("../models/eventModel");

async function handleGetAllUserEvents(req, res) {
    try {
        const { userId } = req.user;

        if (!userId) {
            res.status(400).json({
                message: "User not authorized to book ticket!"
            });
            return;
        }

        const allUserEvents = await events.find({ event_creator: userId });
        return res.status(200).json({
            message: 'events fetched',
            allUserEvents
        });

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        })
    }
}

module.exports = handleGetAllUserEvents;