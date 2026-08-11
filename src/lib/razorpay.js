import iskconLogo from "../assets/iskcon.png";

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

// Current per-transaction cap on the Razorpay account (raise/remove once KYC/activation lifts it).
export const RAZORPAY_MAX_AMOUNT = Number(import.meta.env.VITE_RAZORPAY_MAX_AMOUNT) || 500000;

async function createOrder(amountInRupees, notes) {
  const res = await fetch("/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: amountInRupees, notes }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.reason || "Failed to create order");
  }
  return res.json();
}

async function verifyPayment(payload) {
  const res = await fetch("/api/verify-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function openRazorpayCheckout({ amount, description, notes, onSuccess, onFailure, onOrderError }) {
  if (!window.Razorpay) {
    alert("Payment gateway not loaded. Please refresh the page and try again.");
    return;
  }
  if (!RAZORPAY_KEY_ID) {
    alert("Payment gateway is not configured yet. Please use bank transfer for now.");
    return;
  }

  let order;
  try {
    order = await createOrder(amount, notes);
  } catch (err) {
    if (onOrderError) {
      onOrderError(err.message);
    } else {
      alert(`Could not start payment: ${err.message}. Please use bank transfer instead.`);
    }
    return;
  }

  const rzp = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    order_id: order.orderId,
    name: "ISKCON Bhusawal",
    description,
    image: iskconLogo,
    handler: async (response) => {
      const result = await verifyPayment({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      });
      if (result.verified) {
        onSuccess?.(response);
      } else {
        onFailure?.();
      }
    },
    notes,
    theme: { color: "#C8860A" },
  });

  rzp.on("payment.failed", (response) => {
    console.error("Razorpay payment.failed:", response.error);
    onFailure?.(response.error?.description);
  });
  rzp.open();
}
