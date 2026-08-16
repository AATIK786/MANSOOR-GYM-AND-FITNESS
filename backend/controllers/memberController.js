const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register Member
exports.registerMember = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            password,
            plan
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.execute(
            `INSERT INTO members
            (name,email,phone,password,plan)
            VALUES (?,?,?,?,?)`,
            [
                name,
                email,
                phone,
                hashedPassword,
                plan
            ]
        );

        res.status(201).json({
            success: true,
            message: "Member Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Login
exports.loginMember = async (req, res) => {

    try {

        const { email, password } = req.body;

        const [rows] = await db.execute(
            "SELECT * FROM members WHERE email=?",
            [email]
        );

        if (rows.length === 0) {

            return res.status(404).json({
                success: false,
                message: "Member not found"
            });

        }

        const member = rows[0];

        const valid = await bcrypt.compare(
            password,
            member.password
        );

        if (!valid) {

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(
            {
                id: member.id,
                email: member.email
            },
            "gym_secret_key",
            {
                expiresIn: "24h"
            }
        );

        res.json({

            success: true,

            token,

            member: {

                id: member.id,
                name: member.name,
                email: member.email,
                phone: member.phone,
                plan: member.plan

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get All Members
exports.getMembers = async (req, res) => {

    try {

        const [rows] = await db.execute(

            "SELECT id,name,email,phone,plan,created_at FROM members"

        );

        res.json(rows);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// Get Member By ID
exports.getMemberById = async (req, res) => {

    try {

        const [rows] = await db.execute(

            "SELECT id,name,email,phone,plan FROM members WHERE id=?",

            [req.params.id]

        );

        res.json(rows[0]);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// Update Member
exports.updateMember = async (req, res) => {

    try {

        const {

            name,

            email,

            phone,

            plan

        } = req.body;

        await db.execute(

            `UPDATE members
             SET
             name=?,
             email=?,
             phone=?,
             plan=?
             WHERE id=?`,

            [

                name,

                email,

                phone,

                plan,

                req.params.id

            ]

        );

        res.json({

            success: true,

            message: "Member Updated Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// Delete Member
exports.deleteMember = async (req, res) => {

    try {

        await db.execute(

            "DELETE FROM members WHERE id=?",

            [req.params.id]

        );

        res.json({

            success: true,

            message: "Member Deleted"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};