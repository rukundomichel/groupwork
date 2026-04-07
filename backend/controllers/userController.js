import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
    try {
        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        username = username.trim().toLowerCase();

        const findUser = await User.findOne({ where: { username } });
        if (findUser) {
            return res.status(400).json({
                message: "Username already exists"
            });
        }
        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({ username, password: hash });

        res.status(201).json({
            message: "User created successfully",
            data: user
        });

    } catch (error) {
        console.error("Error occurred when registering user:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}


export async function loginUser(req, res) {
    try {
        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }

        username = username.trim().toLowerCase();

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }


        if (!req.session) {
            return res.status(500).json({
                message: "Session not initialized"
            });
        }

        req.session.userId = user.user_id;

        res.status(200).json({
            message: "Logged in successfully"
        });

    } catch (error) {
        console.error("Error occurred when logging in:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}


export async function logoutUser(req, res) {
    try {
        if (!req.session) {
            return res.status(400).json({
                message: "No active session"
            });
        }

        req.session.destroy(err => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to logout"
                });
            }

            res.status(200).json({
                message: "Logged out successfully"
            });
        });

    } catch (error) {
        console.error("Error occurred when logging out:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}