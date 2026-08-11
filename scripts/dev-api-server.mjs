import http from "node:http";
import createOrder from "../api/create-order.js";
import verifyPayment from "../api/verify-payment.js";

const routes = {
  "/api/create-order": createOrder,
  "/api/verify-payment": verifyPayment,
};

const server = http.createServer(async (req, res) => {
  console.log(`[dev-api] ${req.method} ${req.url}`);

  const handler = routes[req.url];
  if (!handler) {
    console.log(`[dev-api] no route matched for ${req.url}`);
    res.writeHead(404).end("Not found");
    return;
  }

  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", async () => {
    try {
      req.body = body ? JSON.parse(body) : {};
      res.status = (code) => {
        res.statusCode = code;
        return res;
      };
      res.json = (payload) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(payload));
      };
      await handler(req, res);
    } catch (err) {
      console.error(`[dev-api] error handling ${req.url}:`, err);
      if (!res.headersSent) {
        res.writeHead(500, { "Content-Type": "application/json" }).end(JSON.stringify({ error: String(err) }));
      }
    }
  });

  req.on("error", (err) => {
    console.error(`[dev-api] request error on ${req.url}:`, err);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Dev API shim listening on http://localhost:${PORT}`);
});
