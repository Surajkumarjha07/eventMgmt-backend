const express = require("express");
const cors = require("cors");
const connectToDB = require("./databases/database");
const authenticate = require("./middlewares/authenticate");
const cookieParser = require("cookie-parser");
const signUp = require("./routes/signUp");
const logIn = require("./routes/logIn");
const updateUser = require("./routes/updateUser");
const deleteUser = require("./routes/deleteUser");
const signOut = require("./routes/signOut");
const userAuthenticated = require("./routes/userAuthenticated");
const createEvent = require("./routes/createEvent");
const getAllUserEvents = require("./routes/getAllUserEvents");
const handleEventsByLocation = require("./routes/findEventsByLocation");
const eventsByCategory = require("./routes/eventsByCategory");
const bookTicket = require("./routes/bookTicket");
const getAllTickets = require("./routes/getAllTickets");
const getAllEvents = require("./routes/getAllEvents");
const deleteUserEvent = require("./routes/deleteUserEvent");
const deleteUserTicket = require("./routes/deleteUserTicket");

const corsOptions = {
    origin: "https://event-mgmt-frontend-xi.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH", "OPTIONS"],
    credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

//DB Connection
connectToDB();

app.get("/", (req, res) => {
    res.send("Hello, Mr. Wayne");
})

//user routes
app.use("/signUp", signUp);
app.use("/logIn", logIn);
app.use("/updateUser", authenticate, updateUser);
app.use("/deleteUser", authenticate, deleteUser);
app.use("/signOut", signOut);
app.use("/userAuthenticate", userAuthenticated);
app.use("/createEvent", authenticate, createEvent);
app.use("/getAllUserEvents", authenticate, getAllUserEvents);
app.use("/eventsByLocation", handleEventsByLocation);
app.use("/eventsByCategory", eventsByCategory);
app.use("/bookTicket", authenticate, bookTicket);
app.use("/getAllTickets", authenticate, getAllTickets);
app.use("/getAllEvents", getAllEvents);
app.use("/deleteUserEvent", authenticate, deleteUserEvent );
app.use("/deleteUserTicket", authenticate, deleteUserTicket);

app.listen(4000, () => {
    console.log("Server is running");
})