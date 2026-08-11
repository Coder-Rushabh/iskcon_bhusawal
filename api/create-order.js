import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { amount, notes } = req.body || {};
  const amountInRupees = Number(amount);
  if (!amountInRupees || amountInRupees <= 0) {
    res.status(400).json({ error: "Invalid amount" });
    return;
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const order = await razorpay.orders.create({
      amount: Math.round(amountInRupees * 100),
      currency: "INR",
      receipt: `iskcon_${Date.now()}`,
      notes,
    });
    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("[create-order] Razorpay error:", err?.error || err);
    res.status(500).json({
      error: "Failed to create order",
      reason: err?.error?.description,
    });
  }
}
