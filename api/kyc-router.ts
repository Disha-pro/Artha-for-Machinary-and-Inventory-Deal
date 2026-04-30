import { Router } from "express";

const router = Router();

router.post("/submit", async (req, res) => {
  const data = req.body;
  // TODO: Save to Firestore
  res.json({ success: true, status: "pending" });
});

router.get("/ifsc/:code", async (req, res) => {
  const { code } = req.params;
  try {
    const response = await fetch(`https://ifsc.razorpay.com/${code}`);
    if (!response.ok) throw new Error("Invalid IFSC");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: "Invalid IFSC code" });
  }
});

export const kycRouter = router;
