import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//CRUD OPERATION

// read only routes -> not saving anything in the database

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends) // to  get user's friends list

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); //add or remove a friend to user's friends list    

export default router;
