const { events } = require("../models/eventModel");

async function handleDeleteUserEvent(req, res) {
    try {
        const { title } = req.body;
        const { userId } = req.user;

        if (!userId) {
            res.status(400).json({
                message: "User not authorized to delete events!"
            });
            return;
        }

        const deletedEvent = await events.deleteOne({ event_creator: userId, title: title.trim() });

        res.status(200).json({
            message: "event deleted",
            deletedEvent
        })

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        });
    }
}

module.exports = handleDeleteUserEvent;