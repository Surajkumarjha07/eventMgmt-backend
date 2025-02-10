const tickets = require("../models/ticketModel");

async function handleGetAllTickets(req, res) {
    try {
        const { userId } = req.user;

        if (!userId) {
            res.status(400).json({
                message: "user not authorized!"
            })
        }

        const allTickets = await tickets.find({ buyer: userId });

        res.status(200).json({
            message: "All Tickets",
            allTickets
        });

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        });
    }
}

module.exports = handleGetAllTickets;