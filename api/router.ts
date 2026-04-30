import { Router } from "express";
import { aiRouter } from "./ai-router";
import { waitlistRouter } from "./waitlist-router";
import { contactRouter } from "./contact-router";
import { kycRouter } from "./kyc-router";

const router = Router();

router.use("/ai", aiRouter);
router.use("/waitlist", waitlistRouter);
router.use("/contact", contactRouter);
router.use("/kyc", kycRouter);

export const appRouter = router;
