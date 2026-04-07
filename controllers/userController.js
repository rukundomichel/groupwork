import User from "../model/userModel.js";
import bcrypt from 'bcrypt'

export async function registerUser(req, res) {
    try {
        const { username, password } = req.body;
        const finduser = await User.findOne({ where: { username } })
        if (finduser) return res.status(400).json({ message: "Username Already exists" });
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hash })
        res.status(201).json("User created successfully", user);
    } catch (error) {
        console.log("Error occured when registering user", error)
        res.status(500).json({ error: error.message })
    }
}

export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } })
        if (!user) return res.status(400).json({ message: "Invalid Username" })
        const unhash = await bcrypt.compare(password, user.password)
        if (!unhash) return res.status(400).json({ message: "Invalid password" })
        req.session.userId = user.user_id;
        res.status(200).json({ message: "Logged in successwfully" });

    } catch (error) {
        console.error("error Occured when logging in", error)
        res.status(500).json({ error: error.message })
    }
}

export async function logoutUser(req, res) {
    req.session.destroy(err => {
        if (err) return res.status(404).json("Failed to logout");
        res.status(200).json("logged out successfully");
    })
}