const { events } = require("../models/eventModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },

    filename: (req, file, cb) => {
        let title = req.body.title ? req.body.title.replace(/\s+/g, "_") : "event";
        cb(null, `${title}${file.originalname}`);
    }
})

const upload = multer({ storage });

async function handleCreateEvent(req, res) {
    try {
        const { title, description, category, date, start_time, end_time, location, apartment, region, venue, price, capacity } = req.body;
        const image = req.file.filename;
        const { userId } = req.user;

        if (!userId) {
            res.status(400).json({
                message: "User not authorized to create event"
            });
            return;
        }

        const event = new events({ event_creator: userId, title, description, category, date, start_time, end_time, location, apartment, region, venue, price, capacity, image })
        await event.save();
        return res.status(200).json({
            message: 'Event created'
        });

    } catch (error) {
        console.log("Internal server error!", error);
        res.status(500).json({
            message: "Internal server error!",
            error
        })
    }
}

module.exports = { handleCreateEvent, upload };