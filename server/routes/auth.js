import { Router } from "express";
import { signInWithGoogle, signIn, signUp } from "../controllers/auth.js";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/logout");
router.post("/google", signInWithGoogle);
router.get("/findbyemail");
router.get("/generateotp");
router.get("/verifyotp");
router.get("/createResetSession");
router.put("/forgetpassword");

export default router;
