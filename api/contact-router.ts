import { Router } from "express";
import { sendEmail, EmailTemplates } from "./lib/email";

const router = Router();

router.post("/submit", async (req, res) => {
  const { name, email, phone, message, type } = req.body;
  // TODO: Save to Firestore
  
  await sendEmail(email, "Message Received - Artha", EmailTemplates.contactReceived(name));

  res.json({ success: true });
});

export const contactRouter = router;
