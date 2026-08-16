const express = require("express");

const router = express.Router();

const {
    registerMember,
    loginMember,
    getMembers,
    getMemberById,
    updateMember,
    deleteMember
} = require("../controllers/memberController");

router.post("/register", registerMember);
router.post("/login", loginMember);

router.get("/", getMembers);
router.get("/:id", getMemberById);

router.put("/:id", updateMember);

router.delete("/:id", deleteMember);

module.exports = router;