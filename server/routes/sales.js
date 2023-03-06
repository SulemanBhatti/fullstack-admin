import express from "express";
import { getSales } from "../controllers/sales.js";

const router = express.Router();

//sale routes
router.get("/sales", getSales);

export default router;
