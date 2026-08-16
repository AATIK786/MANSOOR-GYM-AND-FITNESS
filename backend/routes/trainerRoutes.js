const express = require("express");
const router = express.Router();

const {
    addTrainer,
    getTrainers,
    getTrainerById,
    updateTrainer,
    deleteTrainer
} = require("../controllers/trainerController");

router.post("/", addTrainer);
router.get("/", getTrainers);
router.get("/:id", getTrainerById);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

module.exports = router;