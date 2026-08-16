const db = require("../config/db");

exports.createContact = async (req, res) => {

    try {

        const {

            name,

            email,

            phone,

            subject,

            message

        } = req.body;

        const sql = `

        INSERT INTO contacts

        (name,email,phone,subject,message)

        VALUES (?,?,?,?,?)

        `;

        await db.execute(sql, [

            name,

            email,

            phone,

            subject,

            message

        ]);

        res.json({

            success: true,

            message: "Message Sent Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

exports.getContacts = async (req, res) => {

    try {

        const [rows] = await db.execute(

            "SELECT * FROM contacts ORDER BY id DESC"
        );

        res.json(rows);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

exports.deleteContact = async (req, res) => {

    try {

        await db.execute(

            "DELETE FROM contacts WHERE id=?",

            [req.params.id]

        );

        res.json({

            success: true,

            message: "Contact Deleted"

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};