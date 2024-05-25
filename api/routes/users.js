import express from "express";
import {verifyToken,verifyUser, verifyAdmin  } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("hello user, you are logged in")
 })

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})
export default router;