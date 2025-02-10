const { events } = require("../models/eventModel");
const tickets = require("../models/ticketModel");

async function handleBookTicket(req, res) {
    try {
        const { title, date, location } = req.body;
        const { userId } = req.user;

        if (!userId) {
            res.status(400).json({
                message: "User not authorized to book ticket!"
            });
            return;
        }

        const targetEvent = await events.findOne({ title });

        if (!targetEvent) {
            res.status(404).json({
                message: "event not found"
            });
            return;
        }

        targetEvent.attendees = targetEvent.attendees + 1;
        await targetEvent.save();

        const ticket = new tickets({ buyer: userId, title, date, location });
        await ticket.save();
        res.status(200).json({
            message: "Ticket booked"
        })

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        });
    }
}

module.exports = { handleBookTicket };