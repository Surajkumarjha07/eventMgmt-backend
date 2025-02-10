const tickets = require("../models/ticketModel");

async function handleDeleteUserTicket(req, res) {
    try {
        const { title } = req.body;
        const { userId } = req.user;        

        if (!userId) {
            res.status(400).json({
                message: "User not authorized to delete events!"
            });
            return;
        }

        const deletedEvent = await tickets.deleteOne({ buyer: userId, title: title.trim() });

        res.status(200).json({
            message: "ticket deleted",
            deletedEvent
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}

module.exports = handleDeleteUserTicket;