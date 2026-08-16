const express = require("express");
const router = express.Router();

const {
    addClass,
    getClasses,
    getClassById,
    updateClass,
    deleteClass
} = require("../controllers/classController");

router.post("/", addClass);

router.get("/", getClasses);

router.get("/:id", getClassById);

router.put("/:id", updateClass);

router.delete("/:id", deleteClass);

module.exports = router;