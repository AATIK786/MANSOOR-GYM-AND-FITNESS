const db = require("../config/db");

// Add Class
exports.addClass = async (req, res) => {

    try {

        const {
            class_name,
            trainer_id,
            duration,
            schedule,
            fees
        } = req.body;

        await db.execute(
            `INSERT INTO classes
            (class_name,trainer_id,duration,schedule,fees)
            VALUES (?,?,?,?,?)`,
            [
                class_name,
                trainer_id,
                duration,
                schedule,
                fees
            ]
        );

        res.status(201).json({
            success: true,
            message: "Class Added Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get All Classes
exports.getClasses = async (req, res) => {

    try {

        const [rows] = await db.execute(
            `SELECT
                c.id,
                c.class_name,
                c.duration,
                c.schedule,
                c.fees,
                t.name AS trainer
            FROM classes c
            LEFT JOIN trainers t
            ON c.trainer_id=t.id`
        );

        res.json(rows);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Get Class By ID
exports.getClassById = async (req, res) => {

    try {

        const [rows] = await db.execute(
            "SELECT * FROM classes WHERE id=?",
            [req.params.id]
        );

        res.json(rows[0]);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update Class
exports.updateClass = async (req, res) => {

    try {

        const {
            class_name,
            trainer_id,
            duration,
            schedule,
            fees
        } = req.body;

        await db.execute(
            `UPDATE classes
             SET
             class_name=?,
             trainer_id=?,
             duration=?,
             schedule=?,
             fees=?
             WHERE id=?`,
            [
                class_name,
                trainer_id,
                duration,
                schedule,
                fees,
                req.params.id
            ]
        );

        res.json({
            success: true,
            message: "Class Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete Class
exports.deleteClass = async (req, res) => {

    try {

        await db.execute(
            "DELETE FROM classes WHERE id=?",
            [req.params.id]
        );

        res.json({
            success: true,
            message: "Class Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};