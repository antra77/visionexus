import express from "express";
import { login } from "../controllers/auth.js";

//this will allow express to identify these files as separate files
const router = express.Router();

router.post("/login", login);

export default router;
