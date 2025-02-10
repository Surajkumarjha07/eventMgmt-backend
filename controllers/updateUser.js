const { users } = require('../models/userModel');
const bcrypt = require("bcrypt");

async function handleUpdateUser(req, res) {
    try {
        const { newEmail, newName, currentPassword } = req.body
        const { email } = req.user;
        if (!email) {
            return res.status(410).json({
                message: "user not authorized"
            });
        }

        if (!newEmail && !newName) {
            return res.status(400).json({
                message: "Provide atleast one field to update"
            });
        }

        if (!currentPassword) {
            return res.status(460).json({
                message: "Previous password needed"
            });
        }
        let existingEmail = await users.findOne({ email: newEmail })
        let passwordMatched;

        let user = await users.findOne({ email })
        if (user) {
            passwordMatched = await bcrypt.compare(currentPassword, user.password)
        }

        if (!passwordMatched) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        let updatedUser = {}
        if (newEmail && !existingEmail) {
            updatedUser.email = newEmail;
        }

        if (newName) {
            updatedUser.name = newName;
        }

        await users.updateOne({ email }, { $set: updatedUser })
        return res.status(200).json({
            message: "User updated"
        })
    } catch (error) {
        console.log("Some error occured", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

module.exports = handleUpdateUser