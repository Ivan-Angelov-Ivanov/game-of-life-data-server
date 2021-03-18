const User = require('../models/user')

exports.listOfUsers = async (req, res) => {
    const list = await User.find({}).exec()
    res.json(list)
}

exports.addUser = async (req, res) => {

    try {
        const {
            email,
            password
        } = req.body
        const user = await new User({email, password}).save()
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(400).send("Failed to add user")
    }
}