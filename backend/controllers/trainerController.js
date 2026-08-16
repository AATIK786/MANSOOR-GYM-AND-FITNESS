const db = require("../config/db");

// Add Trainer
exports.addTrainer = async (req, res) => {

    try {

        const {
            name,
            specialization,
            experience,
            phone,
            email,
            salary
        } = req.body;

        await db.execute(
            `INSERT INTO trainers
            (name,specialization,experience,phone,email,salary)
            VALUES(?,?,?,?,?,?)`,
            [
                name,
                specialization,
                experience,
                phone,
                email,
                salary
            ]
        );

        res.status(201).json({
            success: true,
            message: "Trainer Added Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// Get All Trainers
exports.getTrainers = async (req, res) => {

    try {

        const [rows] = await db.execute(
            "SELECT * FROM trainers ORDER BY id DESC"
        );

        res.json(rows);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Get Trainer By ID
exports.getTrainerById = async (req, res) => {

    try {

        const [rows] = await db.execute(
            "SELECT * FROM trainers WHERE id=?",
            [req.params.id]
        );

        res.json(rows[0]);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Update Trainer
exports.updateTrainer = async (req, res) => {

    try {

        const {
            name,
            specialization,
            experience,
            phone,
            email,
            salary
        } = req.body;

        await db.execute(
            `UPDATE trainers
             SET
             name=?,
             specialization=?,
             experience=?,
             phone=?,
             email=?,
             salary=?
             WHERE id=?`,
            [
                name,
                specialization,
                experience,
                phone,
                email,
                salary,
                req.params.id
            ]
        );

        res.json({
            success: true,
            message: "Trainer Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// Delete Trainer
exports.deleteTrainer = async (req, res) => {

    try {

        await db.execute(
            "DELETE FROM trainers WHERE id=?",
            [req.params.id]
        );

        res.json({
            success: true,
            message: "Trainer Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};