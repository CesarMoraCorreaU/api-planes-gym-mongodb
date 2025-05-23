const express = require("express");
const router = express.Router();

const createPlan = require("../controllers/plans/createPlan");
const getAllPlans = require("../controllers/plans/getAllPlans");
const getPlanById = require("../controllers/plans/getPlanById");
const updatePlan = require("../controllers/plans/updatePlan");
const deletePlan = require("../controllers/plans/deletePlan");

router.get("/", getAllPlans);
router.get("/:id", getPlanById);
router.post("/", createPlan);
router.put("/:id", updatePlan);
router.delete("/:id", deletePlan);

module.exports = router;
