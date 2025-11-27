import express from "express";
import upload from "../Middleware/upload.js";
import { protect } from "../Middleware/auth.js";
import {
  listEmployees,
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} from "../Controller/EmployeeController.js";

const router = express.Router();

router.get("/", protect, listEmployees);
router.post("/", protect, upload.single("image"), addEmployee);
router.get("/:id", protect, getEmployee);
router.put("/:id", protect, upload.single("image"), updateEmployee);
router.delete("/:id", protect, deleteEmployee);

export default router;
