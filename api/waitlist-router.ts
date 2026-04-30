import { Router } from "express";
import { sendEmail, EmailTemplates } from "./lib/email";

const router = Router();
const waitlist: any[] = []; // In-memory for now if Firestore logic not fully wired yet, but I should use Firestore

router.post("/join", async (req, res) => {
  const { name, email, phone, userType, city } = req.body;
  // TODO: Save to Firestore
  
  const position = waitlist.length + 1;
  waitlist.push({ name, email, phone, userType, city, position, createdAt: new Date() });

  await sendEmail(email, "Welcome to Artha Waitlist", EmailTemplates.waitlistWelcome(name, position));

  res.json({ success: true, position });
});

export const waitlistRouter = router;
